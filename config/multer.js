"use stric";
const multer = require("multer");
const path = require("path");

const diskstorage = multer.diskStorage({
  destination: (req, file, cb)=>{
      cb( null, path.join(__dirname, "../images"));
  },
  filename: (req, file, cb) => {
    cb(null, `${file.filename}-${Date.now()}.${file.mimetype.split("/")[1]}`);
  },
});


 module.exports = diskstorage;