const { accountSid, authToken } = require('./src/api-key');

const client = require('twilio')(accountSid, authToken);
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.locals.title = 'Elder Flower';
app.set('port', port);

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.post('/api/sendMessage', (request, response) => {
  console.log(request.body);
  client.messages
    .create({
      from: '+17203304593',
      body: 'test',
      to: request.body.phoneNumber
    })
    .then(message => console.log(message.sid))
    .done();
});

app.get('/api/v1/users/:phoneNumber', (request, response) => {
  database('users')
    .select()
    .then(users => {
      response.status(200).json(users);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/users/', (request, response) => {
  const { user } = request.body;
  console.log(user);
  database('users')
    .insert(user, 'isElder')
    .then(user => {
      response.status(201).json(user);
    });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
