const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GigSchema = new Schema({
    venue: String,
    city: String,
    date: String,
    price: Number
})

const BandSchema =  new Schema({ 
    name: String,
    genre: String,
    gigs: [GigSchema]
})

const UserSchema = new Schema({
    username: String,
    city: String,
    bands: [BandSchema]
})

const GigsModel = mongoose.model('Gig', GigSchema)
const BandModel = mongoose.model('Gig', BandSchema)
const UserModel = mongoose.model('Gig', UserSchema)

module.exports = {
    Gig: GigsModel,
    Band: BandModel,
    User: UserModel
}

