const bcrypt = require('bcrypt')
const User = require('../models/user')
const helper = require('../utils/test_helper')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)


describe('this test is about users :)', () => {
    // beforeEach(async () => {
    //     await User.deleteMany({})
    //     const passwordHash = await bcrypt.hash('mysecret', 10)
    //     const user = new User({username: 'root', name: 'Axror   ', passwordHash})

    //     await user.save()
    // })

    test('creation succeeds with a fresh username', async () => {
        const usersAtStart = await helper.usersInDb()
    
        const newUser = {
          username: 'shkalat99',
          name: 'Matti Luukkainen',
          password: 'salainen',
        }
    
        await api
          .post('/users')
          .send(newUser)
          .expect(200)
          .expect('Content-Type', /application\/json/)
    
        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)
    
        const usernames = usersAtEnd.map(u => u.username)
        expect(usernames).toContain(newUser.username)
    })
})