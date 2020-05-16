// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// arrays for tables and waitlist
// =============================================================
let tables = [];
let waitlist = [];
let newReservation = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
// app.get("/api/tables", function (req, res) {
//     return res.json(wishlist.slice)
//     // res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/add", function (req, res) {
//     res.sendFile(path.join(__dirname, "add.html"));
// });

// app.get("/reservation", function (req, res) {
//     res.sendFile(path.join(__dirname, "reservation.html"));
// });

// // Displays all characters
// app.get("/reservation", function (req, res) {
//     return res.json(reservation);
// });

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
});
// Deletes a reservation from the list corresponding to given unique ID
// app.post("/api/remove-reservation", (req, res) => {
//         waitlist = waitlist.filter(reservation => reservation.customerID != req);
//     })
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});