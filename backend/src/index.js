const express = require('express')
const setupBodyparser = require('./setup/bodyparser')
const setupRouting = require('./setup/routing')
const port = 4000


const app = express();
setupBodyparser(app)

async function startAll() {

    app.listen(port, function(err){

        if(err){
            console.log(err)
        }

        else{
            setupRouting(app)         
            console.log(`Server päällä portissa ${port}`)
        }   
    })
}

startAll().catch(console.error)



