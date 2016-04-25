const http = require('http');
const path = require('path');
const express = require('express');
const logger = require('morgan');

const app = express();

app.set('views', path.resolve(__dirname, 'shared/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.render('index');
});

http.createServer(app).listen(3000, ()=> {
  console.log("App running on 3000");
});
