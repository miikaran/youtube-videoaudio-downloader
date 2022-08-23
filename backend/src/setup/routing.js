const Router = require('express').Router
const userSearch = require('../handlers/userSearch')

module.exports = (app, db) => {

    const router = new Router()

    
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

    app.use(router)
    
} 