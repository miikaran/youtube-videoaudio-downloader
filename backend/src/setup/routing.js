const Router = require('express').Router
const videoSearchYTDL = require('../handlers/videoSearchYTDL')


module.exports = (app, db) => {

    const router = new Router()

    app.use(router)
    
} 