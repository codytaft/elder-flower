const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  if (req.body.Body == 'yes') {
    twiml.message('Thank you for verifying. Continue with sign up!');
  } else if (req.body.Body == 'no') {
    twiml.message('I apologize for the inconvenience.');
  } else {
    twiml.message(`Please type 'yes' or 'no'`);
  }

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
