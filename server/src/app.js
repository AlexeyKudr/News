const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/auth.router');
const tokenRouter = require('./routes/token.router');
const newsRouter = require('./routes/news.router');
const accountRouter = require('./routes/account.router');  // Ensure correct import

const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);
app.use('/api/news', newsRouter);
app.use('/api/account', accountRouter);  // Ensure correct usage

module.exports = app;
