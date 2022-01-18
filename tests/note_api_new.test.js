const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('../utils/list_helper')
const api = supertest(app)
const Note = require('../models/note')

// test('testing post req to our blogs list', async () => {
//     const newnote = {
//         title: "example4",
//         author: "example4",
//         url: "example4",
//         likes: "example4",
//         date: new Date(),
//     }
//     await api.post('/blogs').send(newnote).expect(200).expect('Content-Type', /application\/json/)

//     const res = await api.get('/blogs')
//     const content = res.body.map(n => n.title)
//     expect(content).toContain('example4')
// }, 20000)

test('note with content missing will not be saved - test', async () => {
    const newnote = {
        title: "should not be saved",
        author: "because content is missing",
        date: new Date(),
    }
    await api.get('/blogs').send(newnote).expect(200).expect('Content-Type', /application\/json/)
    const res = await api.get('/blogs')
    const content = res.body.map(n => n.title)
    expect(content).toContain('example4')
}, 20000)