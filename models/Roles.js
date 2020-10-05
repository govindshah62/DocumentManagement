const mongoose = require('mongoose');
const schema = mongoose.Schema;

const roles = new schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
});

module.exports = mongoose.model('Roles',roles );