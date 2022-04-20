const userNameMinLength = 3;
const tokenLength = 12;
const generateWord = require("./geraToken");
const validate = require("./middleware/validate");
const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

app.post('/user/register', validate, function (req, res) {
  const { username } = req.body;
  
  if(username.length <= userNameMinLength ) {
    return res.status(400).json({ message: "invalid data" });
  }

  return res.status(201).json({ message: "user created" });
});

app.post('/user/login', validate, function (_req, res) {
  return res.status(200).json({ token: generateWord(tokenLength) });
});

app.get('/btc/price', async function (req, res) {
  const {authorization} = req.headers;

  if(typeof authorization !== "string" || authorization.length !== tokenLength) {
    return res.status(401).json({ message: "invalid token" });
  }

  const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
  const data = await response.json();

  console.log(data);
  
  return res.status(200).json({message: data});
});

app.listen(3002, () => {
  console.log('Rodante na porta 3002');
})
