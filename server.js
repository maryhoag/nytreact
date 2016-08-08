var express = require('express');
var bodyParser = require("body-parser");
var mongojs = require("mongojs");

//wtf does this mean? this isn't what we did in class
var databaseUrl = "location";
var collections = "search";

//creating an instance of express
var app = express();
var PORT = process.env.PORT || 300; //assigning the port or env var

//setting up mongo
var db = mongojs(databaseUrl, collections);
db.on("error", function(err) {
	console.log("Database error", err);
});

//makes static content accessible
app.use(express.static("public"));

console.log(_dirname);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api + json"}));


//GET route or in routes folder?

//POST route

//DELETE route


app.listen(PORT, function() {
	console.log("listening on port %d", PORT);
})