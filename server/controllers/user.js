const User = require('../models/User');

exports.read = (req, res) => {
  if (!req.user) {
    return res.status(400).json({
      error: 'User Not Found...',
    });
  }

  const { user } = req;

  user.password = undefined;
  user.resetPasswordLink = undefined;

  return res.status(200).json(user);
};

// exports.update = async (req, res) => {
//   // https://blog.jaeyoon.io/2017/10/js-regex.html
//   const regExpPassword = /(?=.*\d)(?=.*[a-z]).{8,}/;
//   const { name, password, confirm,  } = req.body;

//   try {
//     const user = await User.findById(req.user._id);

//     if (name.length < 3) {
//       return res.status(400).json({
//         error: 'At least three characters are required for the name',
//       });
//     }

//     if (regExpPassword.test(password)) {
//       return res.status(400).json({
//         error:
//           'at least eight characters in combination of lowercase and number',
//       });
//     }

//     if (password !== confirm) {
//       return res.status(400).json({
//         error: 'Password and confirm does not match...',
//       });
//     }

//     user.name = name;
//     user.password = password;
//     const response = await user.save();

//     return res.status(200).send(response);
//   } catch (error) {
//     return res.status(400).json({
//       error: 'User Not Found...',
//     });
//   }
// };

// exports.update = async (req, res) => {
//   const { name, password, bio, email } = req.body;

//   try {
//     // user update 정보 조사
//     const user = await User.findByUser(req.user._id);

//     if (user) {
//       if (name && name.length > 2) user.name = name;
//       if (password && password.length > 5) user.password = password;
//       if (bio) user.bio = bio;

//       const response = await user.save();
//       return res.status(200).send({
//         user: response,
//         message: 'Profile Update Completed...',
//       });
//     }
//   } catch (error) {
//     return res.status(400).json({
//       error: 'User Not Found...',
//     });
//   }
// };

exports.updatePassword = async (req, res) => {
  const { password } = req.body;
  const regExpPassword = /(?=.*\d)(?=.*[a-z]).{8,}/;

  try {
    const user = await User.findById(req.user._id);

    if (user) {
      if (password && regExpPassword.test(password)) {
        user.password = password;
        const response = await user.save();

        return res.status(200).send({
          user: response,
          message: 'Successfully Update Password...',
        });
      }
    }
  } catch (error) {
    return res.status(400).json({
      error: 'User Not Found...',
    });
  }
};

exports.updateName = async (req, res) => {
  const { name } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (user) {
      if (name && name.length > 3) {
        user.name = name;
        const response = await user.save();

        return res.status(200).send({
          user: response,
          message: 'Successfully Update Name...'
        });
      }
    }
  } catch (error) {
    return res.status(400).json({
      error: 'User Not Found...',
    });
  }
};

exports.updateBio = async (req, res) => {
  const { bio } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (user) {
      if (bio && bio.length > 10) {
        user.bio = bio;
        const response = await user.save();

        return res.status(200).send({
          user: response,
          message: 'Successfully Update Bio...'
        });
      }
    }
  } catch (error) {
    return res.status(400).json({
      error: 'User Not Found...',
    });
  }
};
