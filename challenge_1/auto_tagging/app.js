var cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: 'dj5voixos',
    api_key: '772621411642637',
    api_secret: 'mN5STnveTyklU1ZDrYzf6V3DXGw'
});

cloudinary.uploader.upload("./pictures/1749.jpg",
    function(result) { console.log(result.info.categorization.imagga_tagging) },
    { categorization: "imagga_tagging" });

var connect = require('connect');
var http = require('http');
var app = connect();
    fs = require('fs'),
    path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use("/upload", function(req,res, next)
{
    console.log(req.body)
    console.log(req.files)
});
http.createServer(app).listen(3000);
