const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('../utils/test_helper')
const api = supertest(app)

test('testing likes property to be 0', async () => {
    const newnote = {
        title: "example40",
        author: "example40",
        url: "example40",
        likes: "",
        date: new Date(),
    }
    await api.post('/blogs').send(newnote).expect(200).expect('Content-Type', /application\/json/)

    const res = await api.get('/blogs')
    // console.log(res);
    const length = res.body.length
    // console.log(length);
    // console.log(res.body[length-1].likes);
    expect(res.body[length-1].likes).toBe('0')
}, 100000)