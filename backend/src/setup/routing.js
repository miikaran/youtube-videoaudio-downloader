const Router = require('express').Router
const userSearch = require('../handlers/userSearch')
const fs = require('fs');
const ytdl = require('ytdl-core');


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


    app.post("/download", function(req, res){

        userSearch.uploadContent(req.body, function(err, data){  
            res.send(data)   
        });   
    })



    app.get('/download', function(req, res) {

        /*===================================
            UPLOAD THE CONTENT TO SERVER 
            & DOWNLOAD TO CLIENT AFTER
        =================================== */
        userSearch.downloadContent(req.body, function(videoURL, name, videoQuality, videoFormat){
  
            new Promise((resolve, reject) => {

                try{

                    // UPLOAD TO SERVER //
                    ytdl(videoURL, {quality: videoQuality, filter: videoFormat})
                    .pipe(fs.createWriteStream(`${name}`))
                    .on('close', () => {

                        console.log(videoFormat, videoQuality)
                        // DOWNLOAD TO CLIENT //
                        res.download(name)
                        resolve();
                        
                        // DELETE FILE FROM SERVER //
                        setTimeout(function() {
                            fs.unlinkSync(name)
                        }, 2000)

                    })
                }

                catch(err){
                    console.log(err)
                }
            }) 
        })
    })

    app.use(router)
    
} 