const router = require('express').Router();

const user = require('./user.route');
const loginRegister = require('./login_register.route');
const project = require('./project.route');

router.use('/user', user);
router.use('/authenticate', loginRegister);
router.use('/project', project);

module.exports = router;