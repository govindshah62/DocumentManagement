const mongoose = require('mongoose');
const schema = mongoose.Schema;

const functionalAreas = new schema({
    id:{
        type:String,
    },
    description:{
        type:String,
    },
});

module.exports = mongoose.model('FunctionalAreas', functionalAreas);