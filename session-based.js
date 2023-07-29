// Import the required modules
const express = require('express');
const cookieParser = require('cookie-parser');

// Create an instance of the Express application
const app = express();
var userID =0;
app.use(cookieParser());

// Define the port for the server
const port = 3000;

const session = require('express-session');
app.use(session({
  secret: "12312gklgmtlgkmtrlkgmlrtkgm", // 用於加密會話 ID 的私鑰
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // 設置 cookie 安全性選項
    maxAge: 3600000 // 設置 session cookie 生存期限為 1 小時
  }
}));




// Define a route for the root URL ("/")
app.get('/', (req, res) => {
    req.session.userID = userID;
    userID = userID + 1;
    res.send('Hello, this is a simple session-based.js server!');

});

// Start the server and make it listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
