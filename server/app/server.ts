//const express = require('express');
import express from 'express';
const PORT = process.env.PORT || 3000;

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Node Server Works');
});

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});
