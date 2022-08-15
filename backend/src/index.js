const express = require('express')
const fs = require('fs');
const setupBodyparser = require('./setup/bodyparser')
const setupRouting = require('./setup/routing')
const port = 4000
const app = express();
const userSearch = require('./handlers/userSearch')

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

app.post("/ladatut_tiedostot/", function(req, res){

    userSearch.addData(req.body, function(err, data){            
        res.send(data) 
        console.log(data)            
    });

    userSearch.searchVideo(req.body, function(err, data){  
        res.send(data)
    });

})

app.get("/videoInfo/", function(req, res){
    userSearch.getData(function(data){  
        res.send({"statuscode":1, "result":data})
    });
})


