const express = require('express')
const fs = require('fs');
const ytdl = require('ytdl-core');
const setupBodyparser = require('./setup/bodyparser')
const setupRouting = require('./setup/routing')

port = 4000

const app = express()
setupBodyparser(app)


async function start() {

    app.listen(port, () => {
        console.log(`Server päällä, portti ${port} `)
    })
}

start().catch(console.error)