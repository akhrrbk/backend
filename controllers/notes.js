const personsRouter = require('express').Router()
const Note = require('../models/note')

personsRouter.get('/home', (req, res) => {
    res.send('home page')
})
personsRouter.get('/', (req, res) => {
    Note.find({}).then(notes => {
      res.json(notes)
    })
})

personsRouter.get('/:id', (req, res) => {
    Note.findById(req.params.id)
        .then(note => {
            if(note){
                res.json(note)
            } else {
                res.status(404).end()
            }
        })
        .catch((error) => {
            console.log(error)
            res.status(400).end()
        })
})

personsRouter.post('/', (req, res) => {
    const body = req.body

    // if(Object.keys(body).length < 2){
    //     return res.status(400).json({error: 'content missing'})
    // }
    
    const note = new Note({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.url,
        date: new Date(),
    })
    
    note.save().then(savedNote => {
        res.json(savedNote)
    })
    
})


personsRouter.delete('/:id', (req, res, next) => {
    Note.findByIdAndRemove(req.params.id)
      .then(res => {
        res.status(204).end()
      })
      .catch(error => next(error))
  })

personsRouter.put('/:id', (req, res, next) => {
    const body = req.body

    const note = {
        name: body.name,
        number: body.number,
    }
    Note.findByIdAndUpdate(req.params.id)
        .then(updatedNote => {
            res.json(updatedNote)
        })
        .catch(error => next(error))
    console.log('but updated the number');
})

module.exports = personsRouter