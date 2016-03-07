var express = require("express");

var app = express();

var port = 8000;

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