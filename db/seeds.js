require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')
// const User = Schema.User
// const Band = Schema.Band
// const Gig = Schema.Gig

// const { User } = Schema
// const { Band } = Schema
// const { Gig } = Schema

const { User, Band, Gig } = Schema

const monday = new Gig({
    venue: 'PCM',
    city: 'Atlanta',
    date: 'Monday',
    price: 3.50
})

const nickle = new Band({
    name: 'NickleBack',
    genre: 'Awesome',
    gigs: [monday]
})

const mancy = new User({
    username: 'Mancy',
    city: 'Atlanta',
    bands: [nickle]
})

const nancy = new User({
    username: 'Nancy',
    city: 'Hotlanta',
    bands: [nickle]
})

User.deleteMany()
    .then(() => {
        return User.insertMany([mancy, nancy])
    })
    .then(() => {
        console.log('Done Seeding!')
        mongoose.connection.close()
    })
