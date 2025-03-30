var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
var passport=require("passport");
var methodOverride= require("method-override");
var path = require('path');


// app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// middleware
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));

app.get("/", function(_, res){
	res.render("index");
});

app.get("/login", function(_, res){
	res.render("login");
});

app.get("/signup", function(_, res){
		res.render("signup");
});

app.post("/signup", function(_, res){
	res.redirect("/maps");
});
app.post("/login", function(_, res){
	res.redirect("/maps");
});
app.get("/maps", function(_, res){
	res.sendFile(path.join(__dirname + '/MapAndLoc.html'));
});

app.listen(3000, function(){
    console.log("Server running at http://localhost:3000");
});
