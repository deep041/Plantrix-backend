const mongoose = require('mongoose');

const userSchema = require('./user.modal');
const projectsSchema = require('./projects.modal');

const user = mongoose.model('user', userSchema);
const project = mongoose.model('project', projectsSchema);

module.exports = { user, project };
