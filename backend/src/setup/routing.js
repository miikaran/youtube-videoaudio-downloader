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


    app.get('/download', function(req, res) {

        /*===================================
            UPLOAD THE CONTENT TO SERVER 
            & DOWNLOAD TO CLIENT AFTER
        =================================== */
        userSearch.downloadContent('download', function(name, videoURL, videoQuality, videoFormat){
  
            new Promise((resolve, reject) => {

                try{

                    ytdl(videoURL, {quality: videoQuality, format: videoFormat})
                    .pipe(fs.createWriteStream(`${name}`))

                    .on('close', () => {

                        // UPLOAD FINISHED //
                        res.download(name)
                        console.log('download done')
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

      
    app.put("/VIDEOS/", function(req, res){
    
        userSearch.downloadContent(req.body, function(err, data){            
            res.send(data)        
        });   
    })


    app.use(router)
    
} 