const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const db = require('./models/index');
const { env } = process;

const session = require('express-session');
const passport = require('passport')

const app = express();

const User = db.user;
const Content = db.content;
const Comment = db.comment;

// Relations
// User has many Content
User.hasMany(Content);

// User has many Comment
User.hasMany(Comment);

// Content has many Comment
Content.hasMany(Comment);

// Comment belongs to User
Comment.belongsTo(User);

// Comment belongs to Content
Comment.belongsTo(Content);



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Method overriding here
app.use(require('method-override')('_method'))

// For Passport
app.use(session({

    secret: env.SESSION_KEY,

    resave: true,

    saveUninitialized: true

})); // session secret

app.use(passport.initialize());

app.use(passport.session());

app.use('/admin', require('./routes/admin'));
app.use('/user', require('./routes/user'));
app.use('/content', require('./routes/content'));

module.exports = app;