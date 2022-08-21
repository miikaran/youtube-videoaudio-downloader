const firebase = require('../setup/firebase')
const express = require('express')
const fs = require('fs');
const ytdl = require('ytdl-core');
const app = express()
const fetch = require("node-fetch");

const youtubeAPIKey = ""


module.exports = {


    storeUserSearch: async function(req, callback){

        let userSearch = req.userSearch
        let objectName = "YOUTUBE_SEARCH"
        const youtubeURL = `https://www.googleapis.com/youtube/v3/search?key=${youtubeAPIKey}&type=video&part=snippet&maxResults=${req.resultAmount}&q=${userSearch}`
        
        const response = await fetch(youtubeURL)
        const data = await response.json()

        firebase.database().ref("testi/" + objectName).set({

            items: data.items,
            userSearch: req.userSearch,

        });     
        callback(null, {"success":200, "msg: ":"sent to firebase"})
    },


    downloadContent: async function(req){
  
        // VALIDATE URL & DOWNLOAD THE CONTENT WITH YTDL-CORE //      
        let videoURL = req.videoURL 
        console.log(videoURL)
        let basicInfo = await ytdl.getBasicInfo(videoURL)
        let name = basicInfo.videoDetails.title

        ytdl(videoURL)
        .pipe(fs.createWriteStream(`${name}.mp4`));
        console.log('lataus')   
        

    },

    

    getUserData: function(callback){

        firebase.database().ref("testi/").once("value").then(function(snapshot){

            callback(snapshot.val());
        })
   
    },
}






  
