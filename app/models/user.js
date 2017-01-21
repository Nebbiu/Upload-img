'use strict'
let mongoose = require('mongoose')

let userModel = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number,
        default: 99
    },
    adress: {
        type: String

    },
    image: {
        type: String
    }
}, {
    timestamps: true
}))
module.exports = userModel
