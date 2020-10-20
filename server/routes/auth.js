const express = require('express');
const {
  signup,
  activateSignup,
  signin,
  me,
  forgotPassword,
  resetPassword,
  googleLogin,
  facebookLogin,
} = require('../controllers/auth');

// Middleware
const { auth } = require('../middleware/auth');

// Validators
const { runValidation } = require('../validators');
const {
  userSignupValidator,
  userSigninValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require('../validators/auth');

const router = express.Router();

router.post('/signup', userSignupValidator, runValidation, signup); // pass
router.post('/account-activation', activateSignup); // pass
router.post('/signin', userSigninValidator, runValidation, signin); // pass
// Reset Password
router.put(
  '/forgot-password',
  forgotPasswordValidator,
  runValidation,
  forgotPassword
);
router.put(
  '/reset-password',
  resetPasswordValidator,
  runValidation,
  resetPassword
);

// Logout
router.get('/me', auth, me);

//  Google and Facebook
router.post('/google-login', googleLogin);
router.post('/facebook-login', facebookLogin);

module.exports = router;
