const express = require('express')
const fs = require('fs');
const fsPromises = fs.promises;
const app = express();
const port = 8080
const usrUrl = '/volume1/homes/sabnock/user/users.json';

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get('/', (req, res) => {
  console.log('Hello World!');
  res.send('Hello World!')
});

app.post('/login', (req, res) => {
  const { login, password } = JSON.parse(req.body);
  read({
    url: usrUrl,
    callback: (error, payload) => {
      const users = JSON.parse(payload);
      let user = users.find(user => user.login === login && user.password === password);

      if (user) {
        console.log('ok ', user.id);
        res.status(200).send(JSON.stringify(user.id));
      }
      else {
        console.log('Not Found');
        res.status(401).send('Not Found');
      }
    }
  })
});

app.get('/goods/:id', function (req, res) {
  console.log(req.params.id);
  const id = req.params.id;
  read({
    url: '/volume1/homes/sabnock/goods/' + id + '.json',
    callback: (error, payload) => {
      res.status(200).send(payload);
    }
  })
});

const read = async ({ url, callback }) => fs.readFile(url, "utf-8", callback);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});