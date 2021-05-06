const mongoose = require('mongoose');
const thingsSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },
    date: {
        type: Date ,
        required : true
    }
});

const Thing = mongoose.model('Thing',thingsSchema);
module.exports = Thing;