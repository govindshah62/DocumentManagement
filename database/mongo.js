const mongoose = require('mongoose');

require('dotenv').config({path:'./config.env'});

const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

module.exports.mongoConnection = async()=>{
    try{
        await mongoose.connect(process.env.URI,option);
        console.log(`Database connected to ${mongoose.connection.host}`);
    }catch(error){
        console.error(error)
        process.exit(1);
    }
};