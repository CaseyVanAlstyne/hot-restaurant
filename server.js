// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var reservation = require("./reservation");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================

let waitlist = [];

// Routes
// =============================================================

// Returns array of reservation objects for every reservation currently occupying a table
app.get("/api/tables", (req, res) => {
    return res.json(waitlist.slice(0, 5));
});

// Returns array of reservation objects for every reservation currently waiting on a table
app.get("/api/waitlist", (req, res) => {
    return res.json(waitlist.slice(5));
});

// Adds a reservation to the list
app.post("/api/add-reservation", (req, res) => {
    waitlist.push(req.body);
    console.log(req.body);
    return res.json('OK');
});

// Deletes a reservation from the list corresponding to given unique ID
// app.post("/api/remove-reservation", (req, res) => {
//     waitlist = waitlist.filter(reservation => reservation.customerID != req);
// })

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});