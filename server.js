const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//catch all post api on my backend server
app.route('*').post((req, res) => {
  //get the token from the frontend and make api call to make charge
  const token = req.body.token;
  console.log(token);
  let url = "https://api-sandbox.ca-dev.co/v1/payment/charges";
  let data = '{confirmationToken:' + token + '}';
  const options = {
    uri: url,
    method: 'POST',
    body: '{"confirmationToken":"'+token+'"}',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer d8d5d840ecccbae04bce0bf6204240dc9aa02fc6'
    }
  };

  request(options, function (error, response) {
    //retrieve "receipt" from charge after on response.
    console.log(response.body);
  });

});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
