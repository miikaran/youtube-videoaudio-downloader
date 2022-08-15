const Router = require('express').Router
const videoSearchYTDL = require('../handlers/userSearch')


module.exports = (app, db) => {

    const router = new Router()

    app.use(router)
    
} 