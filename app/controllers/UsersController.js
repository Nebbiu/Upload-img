'use strict'
let Controller = require('./Controller'),
    formidable = require('formidable'),
    path = require('path'),
    fs = require('fs');

const USER = require('../models/user')

class UsersController extends Controller {
    constructor() {
        super(USER)
    }
    upload(req, res, next) {
        // parse a file upload
        let form = new formidable.IncomingForm();

        form.uploadDir = './public/static/img/'

        if (!fs.existsSync(form.uploadDir)) fs.mkdirSync(form.uploadDir)

        form.on('file', (field, file) => {
                fs.rename(file.path, form.uploadDir + file.name)
            })
            .on('end', () => {
                console.log("uploaded")
                res.sendStatus(200)
            })

        form.parse(req)
    }

}
module.exports = UsersController
