// Import the required modules
const express = require('express');
const cookieParser = require('cookie-parser');

// Create an instance of the Express application
const app = express();
var userID =0;
app.use(cookieParser());

// Define the port for the server
const port = 3000;



app.get('/hello', (req, res) => {
  // Set an HTTP-only cookie with the name "myCookie" and value "example"
  
  res.cookie('myCookie', userID+1, { httpOnly: true });
  userID = userID + 1
  res.send('Cookie has been set!');
});

app.get('/printID', (req, res) => {
    // Set an HTTP-only cookie with the name "myCookie" and value "example"
    res.send(req.cookies.myCookie);
  });


// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello, this is a simple Express server!');
});

// Start the server and make it listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
