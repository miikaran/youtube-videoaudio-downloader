const firebase = require('../setup/firebase')
const express = require('express')
const fs = require('fs');
const ytdl = require('ytdl-core');
const app = express()


module.exports = {

    addData: async function(req, callback){

        let search = req.search

        firebase.database().ref("noob/" + search).set({
            userSearch: req.userSearch,
        });
        callback(null, {"success":200, "msg: ":"sent to firebase"})

    },

    downloadVideo: async function(req, callback){
     
        let videoID = req.userSearch
        let basicInfo = await ytdl.getBasicInfo(videoID)
        let name = basicInfo.videoDetails.title
        let videoThumbnail = basicInfo.videoDetails.thumbnails
        console.log(videoThumbnail)

        if(videoID == null || undefined || ""){

            console.log("add url")
        }

        else{

            ytdl(`${videoID}`)
            .pipe(fs.createWriteStream(`${name}.mp4`));

        }
    }
}





  
