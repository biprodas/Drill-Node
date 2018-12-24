const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create course Schema & Model
const CourseSchema = new Schema({
    id: {
        type: String,
        required: [true, 'Id field is required']
    },
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    duration: {
        type: String
    },
    cost: {
        type: String
    },
    certificate: {
        type: Boolean,
        default: false
    }
});

const Course = mongoose.model('course', CourseSchema);

module.exports = Course;