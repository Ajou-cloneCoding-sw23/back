const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require("passport");

const db = mongoose.connection;
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/musinsa?authSource=admin', {
    useNewUrlParse: true,
    useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB => musinsa");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.urlencoded({ extended: true })); // post 요청에 대한 문자열 자동 파싱 
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.json());

const sessionConfig = {
    secret: 'antlstkzmffhszhelddmfdnlgkstptusdkagh',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 60 * 60 * 24,
        maxAge: 60*60*24
    }
}

app.use(session(sessionConfig));

app.get('/app', async(req, res) => {
    res.send('홈페이지 입니다. 안녕하세요!');
});