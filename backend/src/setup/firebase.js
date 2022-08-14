const firebase = require('firebase-admin')

var admin = require("firebase-admin");
var serviceAccount = require("./key2.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://downloader2-d3176-default-rtdb.europe-west1.firebasedatabase.app"
});

module.exports = app;