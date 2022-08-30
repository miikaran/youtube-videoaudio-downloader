const express = require('express')
const setupBodyparser = require('./setup/bodyparser')
const setupRouting = require('./setup/routing')
const PORT = process.env.PORT || 4000


const app = express();
setupBodyparser(app)


if (process.env.NODE_ENV == 'production') {

    app.use(express.static('frontti/build'))
}



function startAll() {

    app.listen(PORT, function(err){

        if(err){
            console.log(err)
        }

        else{
            setupRouting(app)         
            console.log(`Server päällä portissa ${PORT}`)
        }   
    })
}

startAll().catch(console.error)




