var _ = require('lodash')

const sum = (a, b)=> {
    return a + b
}

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const summ = blogs.reduce((sum, nextvalue) => {
        return sum + nextvalue.likes
    }, 0)
    return summ
}

const mostLikes = (blogs) => {
    const likes = blogs.map(n => n.likes)
    maxNum = Math.max(...likes)
    const maxLikes = blogs.filter(n => n.likes === maxNum)
    return maxLikes
}

const biggestBlogger = (collection) => {
    return _.maxBy(collection, 'blogs')
}

module.exports = {
    sum,
    dummy,
    totalLikes,
    mostLikes,
    biggestBlogger
}