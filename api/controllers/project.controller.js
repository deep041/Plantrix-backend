const project = require('../modals').project;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const sendResponse = require('../utils/response');

const getUserProject = async (req, res, next) => {
    const allProject = await project.find({ ownerId: new ObjectId(req.user.id) }).select('name description _id status');
    sendResponse(res, 200, 200, true, 'Data retrieve successfully!', allProject);
}

const addProject = async (req, res, next) => {
    let projectData = {
        name: req.body.name,
        description: req.body.description,
        ownerId: new ObjectId(req.user.id),
        logo: req.body?.logo
    }

    project.create(projectData).then((result, err) => {
        if (result) {
            sendResponse(res, 200, 200, true, 'Project Create Successfully', result);
        } else {
            sendResponse(res, 200, 403, false, 'Project Creation Failed', err);
        }
    });
}

module.exports = { getUserProject, addProject }