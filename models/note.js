const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGODB_URI

console.log('connecting to', url);
mongoose.connect(url)
  .then(res => {
    console.log('connected to mongoDB')
  })
  .catch((error) => {
    console.log('error connectign to MongoDB', error.message)
  })

const noteSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  url: {type: String, required: true},
  likes: {type: String},
  date: Date,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userDB'
  }
})
noteSchema.plugin(uniqueValidator)

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // delete returnedObject.likes
  }
})

const Note = mongoose.model('blogDB', noteSchema)
// module.exports = mongoose.model('seconddbblogs', seconddbblogs)  
module.exports = Note