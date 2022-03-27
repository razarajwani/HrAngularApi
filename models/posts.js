const mongoose = require('mongoose');
const validator = require('validator');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email');
            }
        }
    },
    description: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    members:{
        type:Array,
        required:false
    }
});

module.exports = mongoose.model('Posts', PostSchema);