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

exports.update = async (req, res) => {
  // https://blog.jaeyoon.io/2017/10/js-regex.html
  const regExpPassword = /(?=.*\d)(?=.*[a-z]).{8,}/;
  const { name, password, confirm } = req.body;

  try {
    const user = await User.findById(req.user._id);

    if (name.length < 3) {
      return res.status(400).json({
        error: 'At least three characters are required for the name',
      });
    }

    if (regExpPassword.test(password)) {
      return res.status(400).json({
        error:
          'at least eight characters in combination of lowercase and number',
      });
    }

    if (password !== confirm) {
      return res.status(400).json({
        error: 'Password and confirm does not match...',
      });
    }

    user.name = name;
    user.password = password;
    const response = await user.save();

    return res.status(200).send(response);
  } catch (error) {
    return res.status(400).json({
      error: 'User Not Found...',
    });
  }
};
