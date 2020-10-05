const mongoose = require('mongoose');
const schema = mongoose.Schema;

const document = new schema({
    id:{
        type:String,
    },
    name:{
        type:String,
    },
    accessCount:{
        type:Number,
    },
    description:{
        type:String,
    },
    otherDetails:{
        type:String,
    },
    meta:{
        type:String,
    },
    tag:{
        type:String,
    },
    url:{
        type:String,
    },
    docTypeId:{
        type:String
    },
    userId:{
        type:String,
    },
    branchId:{
        type:String,
    },
    departmentId:{
        type:String
    },
    createdAt:{
        type: Date,
    },
    deletedAt: {
        type: Date,
    },
});

module.exports = mongoose.model('Document', document);