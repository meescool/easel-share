// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const lodash = require("lodash");

const app = express();

const data = {
    titleName:'Home',
    theme: 'night',
    url: '/'
}

function log(mes){
    console.log(mes);
};
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/', function(req, res){
    log('this is home');
    data.titleName = 'Home';
    data.url='/';
    res.render('index',data);
})

app.listen(3000, function(){
    console.log('the server is up!');
})