const firebase = require('../setup/firebase')
const fetch = require("node-fetch");
const ytdl = require('ytdl-core')
const fs = require('fs');

const youtubeAPIKey = ""

let videoURL;
let name;
let videoQuality;
let videoFormat;


module.exports = {


    /*===============================================
       FETCH USER SEARCH DATA & STORE IT TO FIREBASE
    =================================================*/
    storeUserSearch: async function(req, callback){

        const userSearch = req.userSearch
        const objectName = "YOUTUBE_SEARCH"
        const youtubeURL = `https://www.googleapis.com/youtube/v3/search?key=${youtubeAPIKey}&type=video&part=snippet&maxResults=${req.resultAmount}&q=${userSearch}`
        
        const response = await fetch(youtubeURL)
        const data = await response.json()

        firebase.database().ref("testi/" + objectName).set({

            items: data.items,
            userSearch: req.userSearch,
        });   
        
        callback(null, {"success":200, "msg: ":"sent to firebase"})
    },



    /*======================================
         SETUP PARAMETERS FOR DOWNLOAD
    ========================================*/
    uploadContent: async function(req, callback){
      
        videoURL = req.videoURL
        
        const videoQuality = req.videoQuality
        const videoFormat = req.videoFormat

        const basicInfo = await ytdl.getBasicInfo(videoURL)
        name = (basicInfo.videoDetails.title + '.mp4')

        return callback(videoURL, name, videoQuality, videoFormat)
    },


    /*======================================
        RETURN NEEDED VALUES FOR DOWNLOAD
    ========================================*/
    downloadContent: function(req, callback){
      
        return callback(videoURL, name, videoQuality, videoFormat)
    },



    /*====================================
         GET SEARCH DATA FROM FIREBASE
    =====================================*/
    getUserData: function(callback){

        firebase.database().ref("testi/").once("value").then(function(snapshot){
            callback(snapshot.val());
        })
   
    },
}






  
