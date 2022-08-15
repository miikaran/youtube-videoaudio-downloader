const firebase = require('../setup/firebase')
const express = require('express')
const fs = require('fs');
const ytdl = require('ytdl-core');
const app = express()

module.exports = {

    searchVideo: async function(req, callback){
     
        let videoID = req.userSearch
        let basicInfo = await ytdl.getBasicInfo(videoID)
        let name = basicInfo.videoDetails.title

        /*ytdl(`${videoID}`)
        .pipe(fs.createWriteStream(`${name}.mp4`));*/
    },
    

    addData: async function(req, callback){

        let search = req.search

        firebase.database().ref("testi/" + search).set({
            userSearch: req.userSearch,
            info: (await ytdl.getBasicInfo(req.userSearch)).videoDetails.title,
        });
        callback(null, {"success":200, "msg: ":"sent to firebase"})
    },

    getData: function(callback){

        firebase.database().ref("testi/").once("value").then(function(snapshot){
            callback(snapshot.val());
        })
   
    }
}





  
