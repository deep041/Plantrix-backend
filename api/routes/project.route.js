const express = require('express');
const router = express.Router();
const project = require('../controllers').project;
const authenticateToken = require('../middleware/auth');

router.get('/', authenticateToken, project.getUserProject);
router.post('/', authenticateToken, project.addProject);

module.exports = router;