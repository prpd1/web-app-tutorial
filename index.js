// Express for handling GET and POST request
const express = require("express");
const app = express();

// Parsing the form of body to take
// input from forms
const bodyParser = require("body-parser");

// Configuring express to use body-parser
// as middle-ware
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

// Get request for root of the app
app.get("/", function(req, res) {
	// Sending index.html to the browser
	res.sendFile(__dirname + "/index.html");
});

// Post request for getting input from
// the form
app.post("/mssg", function(req, res) {
	// Logging the form body
	console.log(req.body);
	// Redirecting to the root
	res.redirect("/");
});

// Creating https server by passing
// options and app object
app.listen(8080, () => {
	console.log(`Example app listening on port 8080`);
});