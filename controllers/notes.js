const personsRouter = require('express').Router()
const Note = require('../models/note')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

personsRouter.get('/home', (req, res) => {
    res.send('home page')
})
personsRouter.get('/', async (req, res) => {
    const notes = await Note.find({}).populate('user')
    res.json(notes)
})

personsRouter.get('/:id', async (req, res, next) => {
    const note = await Note.findById(req.params.id)
    if(note){
        res.json(note)
    } else {
        res.status(404).end()
    }    
})

const getTokenFrom = req => {
    const authorization = req.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
}

personsRouter.post('/', async (req, res, next) => {
    const body = req.body
    const token = getTokenFrom(req)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)
    
    const note = new Note({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes === '' ? 0 : body.likes,
        user: user._id,
        date: new Date(),
    })
    
    const savedNote = await note.save()
    user.notes = user.notes.concat(savedNote._id)
    await user.save()
    res.json(savedNote)
})


personsRouter.delete('/:id', async (req, res, next) => {
    await Note.findByIdAndRemove(req.params.id)
    res.status(204).end()
})

personsRouter.put('/:id', async (req, res, next) => {
    const body = req.body

    const note = {
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.url
    }

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, note, { new: true })
    res.json(updatedNote.toJSON())
})

module.exports = personsRouter