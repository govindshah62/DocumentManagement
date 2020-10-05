const mongoose = require('mongoose');
const schema = mongoose.Schema;

const documentSection = new schema({
    Id:{
        type:String,
    },
    imageId:{
        type:String,
    },
    documentId:{
        type:String,
    },
    imageURL:{
        type:String
    },
    imageDesc:{
        type:String,
    },
    imageTitle:{
        type:String,
    },
});

module.exports = mongoose.model('DocumentSection', documentSection);