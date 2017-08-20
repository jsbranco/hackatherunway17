var cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'dj5voixos',
    api_key: '772621411642637',
    api_secret: 'mN5STnveTyklU1ZDrYzf6V3DXGw'
});
var tags = require("./data/tags.json");
var tagKeys = [];
Object.keys(tags).forEach(function(key){
        var cleanedKey = key.toLowerCase().split(" ").join("");
        if(tagKeys.indexOf(cleanedKey)<0){
            tagKeys.push({key:cleanedKey, path:"https://s3-ap-southeast-1.amazonaws.com/hacktherunway/pictures/"+tags[key]+".jpg"});
        }
});
tagKeys=tagKeys.slice(0,5);
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var http = require('http');
var express = require('express')
var app = express(),
    fs = require('fs'),
    path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/upload", upload.single('file'), function (req, res, next) {
    cloudinary.uploader.upload("./uploads/" + req.file.filename,
        function (result) {
            console.log(result.info.categorization.imagga_tagging);
            res.json(result.info.categorization.imagga_tagging.data);
        },
        {categorization: "imagga_tagging",  auto_tagging: 0.3});
});
app.get("/query", function(req,res,next){
    var keys = tagKeys.filter(function(tag){
           return tag.key.indexOf(req.query.search.toLowerCase())>=0;
        });
    res.json({keys:keys});
});
http.createServer(app).listen(3000);
