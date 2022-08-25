const firebase = require('../setup/firebase')
const fetch = require("node-fetch");
const ytdl = require('ytdl-core')

const youtubeAPIKey = ""


module.exports = {


    /*===============================================
       FETCH USER SEARCH DATA & STORE IT TO FIREBASE
    =================================================*/
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


    /*===================================
          SET DOWNLOAD PARAMETERS
    ===================================*/
    downloadContent: async function(req, callback){
      
        let videoURL = req.videoURL
        let videoQuality = req.videoQuality
        let videoFormat = req.videoFormat

        let basicInfo = await ytdl.getBasicInfo(videoURL)
        let name = (basicInfo.videoDetails.title + '.mp4')

        return callback(name, videoURL, videoQuality, videoFormat)

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






  
