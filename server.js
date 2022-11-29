
// init project
require('dotenv').config();
const express = require('express');
const app = express();
const requestIP = require('request-ip');
const cors = require('cors');


app.use(cors({ optionsSuccessStatus: 200 })); 
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', function (req, res) {
  let ipAddress = requestIP.getClientIp(req);
  let language =  req.headers["accept-language"] ;
  let software =  req.header("user-agent");
 
  res.json({ ipaddress: ipAddress, language: language ,software: software });
});



// listen for requests
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
