var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var cors = require("cors");
var crypto = require("crypto");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//处理跨域访问的问题
app.use(cors());

module.exports = app;

var server = app.listen(50789, "127.0.0.1", function (e) {
  if (!e) {
    var host = server.address().address;
    var port = server.address().port;
    console.log("listening on %s:%s", host, port);
  }
})


var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

app.get("/query", function (req, res) {
  MongoClient.connect(url, function (e, client) {
    if (!e) {
      var db = client.db("school");
      db.collection("course").find({}).toArray(function (e, result) {
        if (!e) {
          res.json(result);
        }
      })
    }
  });
});

