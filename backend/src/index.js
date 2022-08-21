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


app.post("/VIDEOS/", function(req, res){

    userSearch.storeUserSearch(req.body, function(err, data){            
        res.send(data)        
    });
})

app.get("/VIDEOS/", function(req, res){

    userSearch.getUserData(function(data){  
        res.send({"statuscode":1, "result":data})
    });

})


app.put("/VIDEOS/", function(req, res){

    userSearch.downloadContent(req.body, function(err, data){            
        res.send(data)        
    });

})


