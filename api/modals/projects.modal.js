const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    collaborators: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }] },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    startDate: { type: Date },
    endDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});