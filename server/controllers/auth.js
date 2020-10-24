const AWS = require('aws-sdk');
const JWT = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const {
  signupEmailParams,
  forgotPasswordEmailParams,
} = require('../helpers/email');

const User = require('../models/User');

dotenv.config();

const SES_CONFIG = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
};

const AWS_SES = new AWS.SES(SES_CONFIG);

// name, email, password 등 input 값이 유요한 값인지 검사하는 방법이 여러개 존재한다.
// 1. 서버 측에서 검사하기
// 2. 클라이언트 측에서 검사하기

/*
클라이언트 측에서 검증된 name, email, password을 req.body로 전달받는다.
1. 해당 email이 이전에 회원가입한 이력이 있는지 검사한다.
- 만약 있다면 이미 가입했다고 오류 메세지를 응답으로 전달한다.

2. 회원 가입 한 적이 없는 이메일이라면, name, email, password와 JWT Secret를 결합해 10분짜리 JWT를 AWS_SES를 이용해 가입한 이메일로 전달한다.

3. 전달한 메세지 url의 끝 부분에 생성한 token 값을 붙여준다. 
*/
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const isSigned = await User.findOne({ email });

    if (isSigned) {
      return res.status(400).json({
        error: 'Already Signed User...',
      });
    }

    const token = JWT.sign(
      { name, email, password },
      process.env.JWT_ACCOUNT_ACTIVATION,
      {
        expiresIn: '10m',
      }
    );

    const params = signupEmailParams(email, token);
    const sendEmailOnSignup = AWS_SES.sendEmail(params).promise();

    sendEmailOnSignup
      .then((data) => {
        console.log('Email Submitted to SES', data);
        return res.status(200).json({
          message: `Email has been sent to ${email}, Follow the instructions to complete your registration`,
        });
      })
      .catch((error) => {
        console.log('Registration Error', error);
        return res.status(400).json({
          error: `We could not verify your email. Please try again...`,
        });
      });
  } catch (error) {
    return res.status(400).send(error);
  }
};

/* 
1. 회원가입시 입력한 이메일로 전달된 메일의 주소를 10분 이내에 클릭한다.
2. 클라이언트 측에서 url로 부터 token을 추출해 req.body를 통해 전달해준다.
3. 해당 토큰을 암호화할때 사용한 key를 이용해 암호를 풀고 - name, email, password를 추출한다.
4. 추출한 값을 User 데이터베이스에 저장한다.
5. 성공적으로 회원가입됬다고 메세지를 보내준다.
*/
exports.activateSignup = async (req, res) => {
  const { token } = req.body;

  JWT.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, async function (
    err,
    decoded
  ) {
    if (err) {
      return res
        .status(401)
        .json({ error: 'Expired Link... Please Try Again...' });
    }

    const { name, email, password } = decoded;

    try {
      const user = new User({ name, email, password });
      await user.save();
      return res
        .status(200)
        .json({ message: 'Registration Success. Please Signin...' });
    } catch (error) {
      return res.status(401).json({
        error: 'Error Saving User in DB. Please Try Again...',
      });
    }
  });
};

/* 
1. 사용자로 부터 email, password를 입력받는다
2. User model의 findByCredentials 메소드를 이용해 해당 email과 password가 일치하는지 확인한다.
3. 일치한다면 해당 유저의 _id를 이용해 JWT 토큰을 생성한다.
- 사용자 resetPasswordLink와 password는 외부에서 알지 못하게 빈 문자로 설정한다.
4. 로그인 한 사용자가 본인의 정보를 확인하기 위해 사용자 정보를 보내주고 동시에 로그인 됬음을 확인하기 위해 토큰을 전달한다.
*/
exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);

    if (!user) {
      return res
        .status(401)
        .send({ error: 'Login Failed! Check Authentication Credentials...' });
    }

    const token = await user.generateAuthToken();
    user.resetPasswordLink = '';
    user.password = '';

    return res.status(200).send({ user, token });
  } catch (error) {
    return res.status(400).json({
      error:
        'User with that email does not exist. Please Signup or Signin with valid email and password...',
    });
  }
};

exports.me = async (req, res) =>
  // View Logged in User Profile - user data is assigned to req.user in auth middleware function
  res.send(req.user);

/*
비밀번호를 잊어버린 경우
1. 이메일을 받는다
2. 해당 이메일이 가입된 이메일인지 확인한다
3. 가입된 이메일이라면 해당 해당 유저의 _id + name과 암호를 이용해 JWT 토큰을 하나 생성한다
4. 해당 토큰을 DB의 resetPasswordLink의 값으로 업데이트한다.
5. 이메일을 보내고 해당 이메일 url의 끝 부분에 토큰을 추가해준다.
*/
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        error: 'User with this email does not exist...',
      });
    }

    const token = JWT.sign(
      { _id: user._id, name: user.name },
      process.env.JWT_RESET_PASSWORD,
      { expiresIn: '10m' }
    );

    const params = forgotPasswordEmailParams(email, token);
    await user.updateOne({ resetPasswordLink: token });

    const sendResetPasswordEmail = AWS_SES.sendEmail(params).promise();

    sendResetPasswordEmail
      .then((data) => {
        console.log('SES Reset Password Success', data);
        return res.status(200).json({
          message: `Email has been sent to ${email}. Click on the link to reset your password`,
        });
      })
      .catch((error) => {
        console.log('SES Reset Password Failed', error);
        return res.status(401).json({
          error,
        });
      });
  } catch (error) {
    return res.status(400).json({
      error: `${error} Password Reset Failed... Try Again...`,
    });
  }
};

/* 
password 검증 로직 필요 - client

1. resetPasswordLink, newPassword를 받는다 resetPasswordLink
2. resetPasswordLink를 토큰 패스워드를 이용해 해독한다.
3. 해당 resetPasswordLink가 실제로 유요한 링크인지 확인한다.
4. 유요하다면 새로운 비밀번호를 저장하고 기존의 resetPasswordLink를 없앤다.
*/
exports.resetPassword = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;

  if (resetPasswordLink) {
    JWT.verify(
      resetPasswordLink,
      process.env.JWT_RESET_PASSWORD,
      async function (err, decoded) {
        try {
          if (err) {
            return res
              .status(401)
              .json({ error: 'Invalid Token... Please Try Again...' });
          }

          const user = await User.findOne({ resetPasswordLink });

          if (!user) {
            return res.status(400).json({ error: 'Not Found User...' });
          }

          user.password = newPassword;
          user.resetPasswordLink = '';
          await user.save();

          return res.status(200).json({
            message: 'Successfully Changed Password! Please Login Again...',
          });
        } catch (error) {
          return res.status(400).json({
            error: 'Password Reset Failed... Try Again...',
          });
        }
      }
    );
  }
};

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
exports.googleLogin = async (req, res) => {
  const { idToken } = req.body;
  try {
    const response = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    console.log('response', response);

    const { email_verified, name, email } = response.payload;
    if (email_verified) {
      const user = await User.findOne({ email });
      console.log('user', user);
      if (user) {
        try {
          const token = await user.generateAuthToken();
          const { _id, email, name, role } = user;

          return res.status(200).json({
            token,
            user: { _id, email, name, role },
          });
        } catch (error) {
          return res.status(401).json({
            error: 'Google Login Failed...',
          });
        }
      } else {
        try {
          const password = email + process.env.JWT_KEY;
          const user = new User({ name, email, password });
          const savedUser = await user.save();
          console.log('saved', savedUser);

          if (savedUser) {
            const token = await savedUser.generateAuthToken();

            const { _id, email, password, role } = savedUser;

            return res.status(200).json({
              token,
              user: { _id, email, password, role },
            });
          }
        } catch (error) {
          return res.status(401).json({
            error: 'Failed to Signup with Google...',
          });
        }
      }
    }
  } catch (error) {
    console.log('error', error);
  }
};

exports.facebookLogin = async (req, res) => {
  console.log('FACEBOOK LOGIN REQ BODY', req.body);
  const { userID, accessToken } = req.body;
  const url = `https://graph.facebook.com/v8.0/${userID}/?fields=id,name,email&access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    const userData = await response.json();
    const { email, name } = userData;

    const user = await User.findOne({ email });

    if (user) {
      try {
        const token = await user.generateAuthToken();
        const { _id, email, name, role } = user;

        return res.status(200).json({
          token,
          user: { _id, email, name, role },
        });
      } catch (error) {
        return res.status(401).json({
          error: 'Facebook Login Failed...',
        });
      }
    } else {
      try {
        const password = email + process.env.JWT_KEY;
        const user = new User({ name, email, password });
        const savedUser = await user.save();
        console.log('saved', savedUser);

        if (savedUser) {
          const token = await savedUser.generateAuthToken();

          const { _id, email, password, role } = savedUser;

          return res.status(200).json({
            token,
            user: { _id, email, password, role },
          });
        }
      } catch (error) {
        return res.status(401).json({
          error: 'Failed to Signup with Facebook...',
        });
      }
    }
  } catch (error) {
    return res.json({
      error: 'Facebook Login Failed... Try Again...',
    });
  }
};
