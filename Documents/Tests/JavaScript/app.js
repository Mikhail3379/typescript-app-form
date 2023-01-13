var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var twoSum = require('./public/javascripts/test3');
var longestPalindrome = require('./public/javascripts/test4');
var kClosest = require('./public/javascripts/test5');
var convert = require('./public/javascripts/test6');
var app = express();

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
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// test3.twoSum();
console.log(twoSum([2,7,11,15], 9));
console.log(longestPalindrome('abrakadabra'));
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));
console.log(convert('PAYPALISHIRING', 3));
module.exports = app;
