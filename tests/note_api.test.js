const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

// test('notes are returned as json', async () => {
//     await api.get('/blogs').expect(200).expect('Content-Type', /application\/json/)
// }, 20000)

test('notes are returned as json', async () => {
    // const newNote = {
    //   title: 'async/await simplifies making async calls',
    //   author: 'Axror',
    //   url: 'axror.uz',
    //   likes: 45,
    //   date: new Date()
    // }
  
    await api
      .get('/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  
  }, 100000)

afterAll(() => {
    mongoose.connection.close()
})

test("testing content of first item in DB to be 'jonim'", async () => {
  const res = await api.get('/blogs')

  expect(res.body[0].title).toBe('jonim')
})