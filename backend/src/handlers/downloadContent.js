const express = require('express')
const fs = require('fs');
const ytdl = require('ytdl-core');
const app = express()



module.exports = {

    downloadContent: function(req){

        // CHECK IF USER INPUT IS URL OR KEYWORD //
        function isValidHttpUrl(string) {

            let url = req.userSearch;
          
            try {
              url = new URL(string);
            }
            catch (_) {
              return false; 
            }
          
            console.log(url.protocol)
            return url.protocol === "http:" || url.protocol === "https:";
          }
          isValidHttpUrl();


        // YTDL-CORE TO DOWNLOAD THE CONTENT //
        let basicInfo = await ytdl.getBasicInfo(videoID)
        let name = basicInfo.videoDetails.title
        let format = ytdl.chooseFormat(basicInfo.formats, { 

          quality: req.quality,
          type: req.type,

          });

        ytdl(videoID, { 

          filter: format => format.container === req.format,
           })

        .pipe(fs.createWriteStream(`${name}.mp4`));

    }
    

}