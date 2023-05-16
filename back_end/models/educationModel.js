const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    hasFile: {
        type: Boolean,
        required: [true, 'Whether have file']
    },
    GPA: {
        type: String,
        required: [true, 'Require to have GPA']
    },
    outOfGPA: {
        type: String,
        required: [true, 'Require to have Full GPA']
    },
    FileId: {
        type: String,
        required: [false]
    },
    courses: [
        {
            courseName: {
                type: String,
                required: [true, 'Require to have Full GPA']
            },
            courseGrade: {
                type: String,
                required: [false]
            },
            courseLink: {
                type: Link,
                required: [false]
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
})

const Education = mongoose.model('Education', educationSchema);
module.exports = Education