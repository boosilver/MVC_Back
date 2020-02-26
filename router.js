const express = require('express')
const app = express()
const controller = require('./controller')

app.get('/test', function (req, res, next) {
  var functionName = "[API: GET http://localhost:1596/express/join]"
  console.log(`This is function ${functionName} `);
  var body = "L"
  new controller().test(body).then((result) => {
    res.status(201);
    res.json(result.message);
    console.log(`END function ${functionName} `)
  })
    .catch((error) => {
      console.log(`${functionName} Failed to check new Service Request: ${error}`);
      res.status(500);
      res.json({
        code: 500,
        message: `Failed : ${error}`
      });
    });
});

app.post('/join', function (req, res, next) {
  var functionName = "[API: POST http://localhost:1596/express/join]"
  console.log(`This is function ${functionName} `);
  new controller().join(req.body).then((result) => {
    res.status(201);
    res.json(result.message);
    console.log(`END function ${functionName} `)
  })
    .catch((error) => {
      console.log(`${functionName} Failed to check new Service Request: ${error}`);
      res.status(500);
      res.json({
        code: 500,
        message: `Failed : ${error}`
      });
    });
});

app.post('/register', function (req, res, next) {
  var functionName = "[API: POST http://localhost:1596/express/register]"
  console.log(`This is function ${functionName} `);
  new controller().register(req.body).then((result) => {
    res.status(201);
    res.json(result.message);
    console.log(`END function ${functionName} `)
  })
    .catch((error) => {
      console.log(`${functionName} Failed : ${error}`);
      res.status(500);
      res.json({
        code: 500,
        message: `Failed : ${error}`
      });
    });
});

app.post('/Query', function (req, res, next) {
  var functionName = "[API: POST http://localhost:1596/express/Query]"
  console.log(`This is function ${functionName} `);
  new controller().Query(req.body).then((result) => {
    res.status(201);
    res.json(result.message);
    console.log(`END function ${functionName} `)
  })
    .catch((error) => {
      console.log(`${functionName} Failed : ${error}`);
      res.status(500);
      res.json({
        code: 500,
        message: `Failed : ${error}`
      });
    });
});

app.post('/QueryAccount', function (req, res, next) {
  var functionName = "[API: POST http://localhost:1596/express/QueryAccount]"
  console.log(`This is function ${functionName} `);
  new controller().QueryAccount(req.body).then((result) => {
    res.status(201);
    res.json(result.message);
    console.log(`END function ${functionName} `)
  })
    .catch((error) => {
      console.log(`${functionName} Failed : ${error}`);
      res.status(500);
      res.json({
        code: 500,
        message: `Failed : ${error}`
      });
    });
});


module.exports = app