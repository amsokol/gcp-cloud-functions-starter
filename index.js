'use strict'

const settings = require('./settings.json')
console.log(settings)

/**
 * @type {number}
 */
var a

a = 1
console.log(a)

/**
 * @param req {Object}
 * @param res {Object}
 */
exports.helloWorld = (req, res) => {
    console.log(req)

    /*
    res
        .status(200)
        .type('application/json')
        .send(settings)
        .end()
    */

    res
        .status(200)
        .type('application/json')
        .send('{ "result": "Hello World!"}')
        .end()
}
