const bcrypt = require('bcrypt')
const User = require('../models/user')
const helper = require('../tests/...')
describe('when there is one user in DB', () => {
    // beforeEach(async () => {
    //     await User.deleteMany({})

    //     const passwordHash = await bcrypt.hash('amamam', 10)
    //     const user = new User({username: 'root', passwordHash})

    //     await user.save()
    // })

    test('creation og succeeds with a fresh username', async () => {
        const usersatstart = await helper.usersInDb()

        const newUser = {
            username: 'ukachang2002',
            name: 'Azizka',
            password: 'j453fdfgjewrugn',
        }

        await api.post('/users').send(newUser).expect(200).expect('Content-Type', /application\/json/)

        const usersatend = await helper.usersInDb()
        expect(usersatend).toHaveLength(usersatstart.length + 1)

        const usernames = usernames.map(n => n.username)
        expect(usernames).toContain(newUser.username)
    })
})