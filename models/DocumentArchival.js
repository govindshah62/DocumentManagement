const mongoose = require('mongoose');
const schema = mongoose.Schema;

const documentArchival = new schema({
    id:{
        type:String,
    },
    documentId:{
        type:String
    },
    customerId:{
        type:String
    },
    userId:{
        type:String
    },
    createdAt:{
        type: Date,
    },
    deletedAt: {
        type: Date,
    },
});

module.exports = mongoose.model('DocumentArchival', documentArchival);