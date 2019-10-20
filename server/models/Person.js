const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Let create the schema of Person
const PersonSchema = new Schema({
    personName: {
        type: String,
    },
    personNickName: {
        type: String,
    },
    personDescription: {
        type: String,
    }
})

// Create model for person
const Person = mongoose.model('person', PersonSchema);

module.exports = Person;