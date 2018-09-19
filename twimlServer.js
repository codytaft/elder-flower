const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  if (req.body.Body.toLowerCase() === 'yes') {
    twiml.message('Thank you for verifying. Continue with sign up!');
  } else if (req.body.Body.toLowerCase() === 'no') {
    twiml.message('I apologize for the inconvenience.');
  } else if (req.body.Body.toLowerCase() === 'hi') {
    twiml.message(`Hi there. What is your name?`);
  }
  if (req.body.Body.toLowerCase() === 'cody') {
    twiml.message(`Welcome back Cody. Would you like you're usual?`);
  } else if (req.body.Body.toLowerCase() === 'of course') {
    twiml.message(
      `I'm sorry Cody. We haven't had that spirit here since 1969.`
    );
  }

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
