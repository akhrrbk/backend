const listHelper = require('../utils/list_helper')

test('1 + 2 equals 3', () => {  
    expect(listHelper.sum(1,2)).toBe(3)
})
// Part4 A 4.3
test('passing blogs to equal 1', () => {
    const blogs = []
    expect(listHelper.dummy(blogs)).toBe(1)
})
// Part4 A 4.4
describe('total likes', () => {
    const blogs = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
          }
    ]
    test('checking if total likes are equal to 5', () => {
        expect(listHelper.totalLikes(blogs)).toBe(5)
    })
})
// Part4 A 4.5
describe('most likes', () => {
    const blogs = [
        {
            title: "ACanonical string reduction",
            author: "Axror W. Dijkstra",
            likes: 1
        },
        {
            title: "BCanonical string reduction",
            author: "Tilla W. Dijkstra",
            likes: 2
        },
        {
            title: "CCanonical string reduction",
            author: "Tilla W. Dijkstra",
            likes: 4
        },
    ]
    const result = [
        {
            title: "CCanonical string reduction",
            author: "Tilla W. Dijkstra",
            likes: 4
        }
    ]
    test('checking if most likes blogs array is printed', () => {
        expect(listHelper.mostLikes(blogs)).toEqual(result)
    })
})

// Part4 A 4.6
describe('biggest blogger', () => {
    const collection = [
        {
            author: "Kaka C. Martin",
            blogs: 3
        },
        {
            author: "Aziz C. Martin",
            blogs: 6
        },
        {
            author: "Tilla C. Martin",
            blogs: 1
        },
        {
            author: "Axror C. Martin",
            blogs: 7
        }
    ]
    const result = {
        author: "Axror C. Martin",
        blogs: 7
    }
    test('checking the biggest blogger to have 7 blogs', () => {
        expect(listHelper.biggestBlogger(collection)).toEqual(result)
    })
})