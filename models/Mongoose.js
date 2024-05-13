const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    age: {
        type: Number,
        required: [true, 'age is  required!'],
        min: [18, 'under aged !'],
        max: [99, 'over aged !'],
    },
    photo: {
        type: String,
        default: ''
    },
    timestamp: { 
        type: Date,
        default: function(){return new Date()},
    }
});

module.exports.Profile = mongoose.model('Profile', profileSchema, 'profiles');