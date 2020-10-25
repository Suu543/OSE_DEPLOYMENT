const express = require('express');

const router = express.Router();

const { auth, admin } = require('../middleware/auth');
const { read, updatePassword, updateName, updateBio } = require('../controllers/user');

// http://localhost:8000/users/user/5f665c37c1cce1641071b8fc
router.get('/user/:id', auth, read);
router.put('/user/update/password/:id', auth, updatePassword);
router.put('/user/update/name/:id', auth, updateName);
router.put('/user/update/bio/:id', auth, updateBio);
// router.put('/user/admin/update/:id', auth, admin, update);

module.exports = router;
