const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

// test('notes are returned as json', async () => {
//     await api.get('/blogs').expect(200).expect('Content-Type', /application\/json/)
// }, 20000)

test('a valid note can be added', async () => {
    const newNote = {
      title: 'async/await simplifies making async calls',
      author: 'Axror',
      url: 'axror.uz',
      likes: 45,
      date: new Date()
    }
  
    await api
      .post('/blogs')
      .send(newNote)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  
    const res = await api.get('/blogs')
  
    const contents = res.body.map(r => r.content)
  
    expect(res.body).toHaveLength(initialNotes.length + 1)
    expect(contents).toContain(
      'async/await simplifies making async calls'
    )
  }, 100000)

afterAll(() => {
    mongoose.connection.close()
})