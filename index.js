const userNameMinLength = 3;
const tokenLength = 12;
const generateWord = require("./geraToken");
const validate = require("./middleware/validate");
const express = require("express");

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

app.listen(3002, () => {
  console.log('Rodante na porta 3002');
})
