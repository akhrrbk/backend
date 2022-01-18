const personsRouter = require('express').Router()
const Note = require('../models/note')

personsRouter.get('/home', (req, res) => {
    res.send('home page')
})
personsRouter.get('/', async (req, res) => {
    const notes = await Note.find({})   
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

personsRouter.post('/', async (req, res, next) => {
    const body = req.body

    const note = new Note({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes === '' ? 0 : body.likes,
        date: new Date(),
    })
    
    const savedNote = await note.save()
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