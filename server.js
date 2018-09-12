const { accountSid, authToken } = require('./src/api-key');

const client = require('twilio')(accountSid, authToken);
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.locals.title = 'Elder Flower';
app.set('port', port);

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.post('/api/sendMessage', (request, response) => {
  client.messages
    .create({ from: '+17203304593', body: 'Hi', to: '+19038511575' })
    .then(message => console.log(message.sid))
    .done();
  console.log(request);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
