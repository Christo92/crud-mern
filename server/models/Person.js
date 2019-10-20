const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Let create the schema of Person
const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
})

// Create model for person
const Person = mongoose.model('person', PersonSchema);

module.exports = Person;