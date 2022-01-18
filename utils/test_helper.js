const Note = require('../models/note')
const User = require('../models/user')

const initialNotes = [
    {
        title: "jonim",
        author: "example",
        url: "example",
        likes: "example",
        date: "2022-01-18T07:04:49.260Z",
        id: "61e6669179b8a82816fb5bd3"
    },
    {
        title: "example2",
        author: "example2",
        url: "example2",
        likes: "example2",
        date: "2022-01-18T07:13:54.953Z",
        id: "61e668b21f1dcaf41d0b86df"
    }
]

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

const nonExistingId = async () => {
  const note = new Note({ content: 'willremovethissoon', date: new Date() })
  await note.save()
  await note.remove()

  return note._id.toString()
}

const notesInDb = async () => {
  const notes = await Note.find({})
  return notes.map(note => note.toJSON())
}

module.exports = {
  initialNotes, nonExistingId, notesInDb, usersInDb
}