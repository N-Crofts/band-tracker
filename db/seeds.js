const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/band-tracker')

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

const daniel = new User({
    username: 'Mancy',
    city: 'Atlanta',
    bands: [nickle]
})

daniel.save()
    .then(data => {
        console.log(data)
        console.log('Done Seeding!')
        mongoose.connection.close()
    })
