const mongoose = require('mongoose');
const schema = mongoose.Schema;

const users = new schema({
    id:{
        type:String,
    },
    roleId:{
        type:String,
    },
    name:{
        type: String,
    },
    otherDetails:{
        type:String,
    },
});

module.exports = mongoose.model('Users', users);