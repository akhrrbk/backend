const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Note = require('../models/note')
const initialnotes = [
    {
        title: "jonim",
        author: "example",
        url: "example",
        likes: "example",
        date: "2022-01-17T05:57:49.034Z",
        id: "61e5055da5b73c380d98cccd"
    },
    {
        title: "jonim",
        author: "example",
        url: "test2",
        likes: "test2",
        date: "2022-01-17T05:59:55.018Z",
        id: "61e505db5213cfecef7ad133"
    }
]

// beforeEach(async () => {
//     await Note.deleteMany({})
//     let noteobject = new Note(initialnotes)
//     await noteobject.save()
// })

test(`a specific note is being called out 'example'`, async () => {
    const res = await api.get('/blogs')

    const contents = res.body.map(r => r.author)
    expect(contents).toContain('example')
})