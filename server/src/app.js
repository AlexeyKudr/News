const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const postRouter = require('./routes/post.router'); Оставил для вас если надо будет удалите
const authRouter = require('./routes/auth.router');
const tokenRouter = require('./routes/token.router');

const app = express();

app.use(express.static('public'));
// app.use(cors({ origin: ['http://localhost:5173'] }));  Оставил для вас если надо будет удалите
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use('/api/posts', postRouter); Оставил для вас если надо будет удалите
app.use('/api/auth', authRouter);
app.use('/api/tokens', tokenRouter);

module.exports = app;
