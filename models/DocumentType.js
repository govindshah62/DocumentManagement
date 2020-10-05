const mongoose = require('mongoose');
const schema = mongoose.Schema;

const documentType = new schema({
    id:{
        type:String,
    },
    description:{
        type:String,
    },
});

module.exports = mongoose.model('DocumentType', documentType);