<<<<<<< HEAD
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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

module.exports = app;
=======
const express = require('express');
const rotasProduto = require('./rotas/rotasProduto')
let app = express();

// rota

app.get('/', (req,res)=> res.send("Olá mundo!"));
app.get('/contatos', (req,res)=> res.send("Página Contatos"));

app.use('/produtos', rotasProduto);


// criando um servidor

app.listen(3000, ()=> console.log("Servidor rodando na porta 3000")); 
>>>>>>> 92a27890c052318e207d5d23d76923dd51f28607
