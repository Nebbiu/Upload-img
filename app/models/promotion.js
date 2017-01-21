'use strict'
let mongoose = require('mongoose')

let userModel = mongoose.model('User', new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    age: {
        type: Number,
        default: 99
    },
    adress:{
      type: String,

    }
}, {
    timestamps: true
}))
module.exports = userModel
