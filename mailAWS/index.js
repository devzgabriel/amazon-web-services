const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const MailProvider = require('./MailProvider');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  // call MailProvider to send an email
  MailProvider.sendEmail('example@gmail.com', "Email Teste", `Corpo do Email`);

  res.send('Email is sent!');
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});