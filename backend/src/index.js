const express = require('express')
const fs = require('fs');
const setupBodyparser = require('./setup/bodyparser')
const setupRouting = require('./setup/routing')
const port = 4000
const app = express();
const addFirebaseData = require('./handlers/videoSearchYTDL')

setupBodyparser(app)

async function startAll() {

    app.listen(port, function(err, data){

        if(err){
            console.log(err)
        }

        else{
            console.log(`Server päällä portissa ${port}`)
        }
    
    })

}

startAll().catch(console.error)

app.post("/ladatut_videot/", function(req, res){
    addFirebaseData.addData(req.body, function(err, data){     
        res.send(data)
              
    });
})

