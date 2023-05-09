const mongoose = require('mongoose');
const qualificationSchema = new mongoose.Schema({
    categories: [
        {
        categoryName: String,
    skill: [
        {
            skillName: String,
            url: String,
        }
    ]
}
],
user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
}
});

const Qualification = mongoose.model('Qualification', qualificationSchema);

