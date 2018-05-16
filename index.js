// Dependencies
// ===========================================================
var express = require("express");
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static('public'));

// Data
// ===========================================================



// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
app.get('/', function(req, res) {
  res.sendfile(path.resolve('index.html'));
})

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
