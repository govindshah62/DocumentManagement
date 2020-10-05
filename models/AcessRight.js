const mongoose = require('mongoose');
const schema = mongoose.Schema;

const accessRight = new schema({
    roleId:{
        type:String,
    },
    documentId:{
        type:String,
    },
    branchId:{
        type:String,
    },
    departmentId:{
        type:String,
    },
    userId:{
        type:String,
    },
    rights:{
        type:String,
        enum:['read','write','share'],
    },
    
});

module.exports = mongoose.model('AccessRight',accessRight );