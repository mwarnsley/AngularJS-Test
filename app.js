var express = require("express");
var path = require('path');

var app = express();

var port = 4000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function(err){
    if(err){
        console.log("There was an error starting the Server on port: " + port);
    }else{
        console.log("Server is running on port: " + port);
    }
});