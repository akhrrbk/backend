const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    passwordHash: {type: String, required: true},
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'blogDB'
        }
    ]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        // h    iding the password
        delete returnedObject.passwordHash
    }
})

const User = mongoose.model('userDB', userSchema)

module.exports = User