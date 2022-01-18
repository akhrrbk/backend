const { get } = require('lodash')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('../utils/test_helper')
const api = supertest(app)

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

// test('note with content missing will not be saved - test', async () => {
//     const newnote = {
//         title: "should not be saved",
//         author: "because content is missing",
//         date: new Date(),
//     }
//     await api.get('/blogs').send(newnote).expect(200).expect('Content-Type', /application\/json/)
//     const res = await api.get('/blogs')
//     const content = res.body.map(n => n.title)
//     expect(content).toContain('example4')
// }, 20000)

// test('deleting the first note', async () => {
//     const notesatstart = await helper.notesInDb()
//     const notetodelete = notesatstart[0]

//     await api.delete(`blogs/${notetodelete.id}`).expect(204)

//     const notesatend = await helper.notesInDb()
//     expect(notesatend).toHaveLength(notesatstart.length - 1)
// }, 100000)

// test('random test', async () => {
    // beforeEach(async () => {
    //     await Note.deleteMany({})
      
    //     const noteObjects = helper.initialNotes
    //       .map(note => new Note(note))
    //     const promiseArray = noteObjects.map(note => note.save())
    //     await Promise.all(promiseArray)
    //   })

// })


// non existing id
// test('this req should return 400', async () => {
//     const invalidid = 'ffffffff'
//     await api.get(`/blogs/${invalidid}`).expect(400)
// })


// testing if update function is working :)
// describe('checking if our database can be updated', () => {
//     test('checking likes to update', async () => {
        
//         const myid = '61e6669179b8a82816fb5bd3'
//         const allblogs = await helper.notesInDb()
//         const blogtoupdate = allblogs.filter(blog => blog.id === myid)

//         const updatedblog = {
//             ...updatedblog,
//             likes: blogtoupdate.likes + 1
//         }

//         await api.put(`/blogs/${myid}`).send(updatedblog).expect(200)
  
//     })
// })
