const fs = require('fs');
const ytdl = require('ytdl-core');
const firebase = require('../setup/firebase')
const express = require('express')

const app = express()

module.exports = {
    addData: function(req, callback){
        let search = req.search

        firebase.database().ref("noob/" + search).set({
            name: req.name,
            email: req.email
        });
        callback(null, {"vastaus":200, "viesti: ":"lähetetty firebaseen"})

    }
}




  
