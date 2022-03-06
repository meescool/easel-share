// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const lodash = require("lodash");

const app = express();

const pages=[['learning', 'Learning'],['art-shows','Art Shows'],['user-page','User Page'], ['easel','My Easel']];

const data = {
    titleName:'Home',
    url: '/'
}

function log(mes){
    console.log(mes);
};
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static('public'));

app.get('/', function(req, res){
    log('this is home');
    data.titleName = 'Home';
    data.url='index';
    res.render(data.url,data);
})

app.get('/:pagename', function(req, res){
    let tempName = lodash.toLower(req.params.pagename);
    // set to 404 in case page does not exist
    data.titleName = '404';
    data.url='404';
    // loop through each of the pages available to set the next page
    pages.forEach(function(page){
        if(page[0] == tempName){
            console.log(page[0]);
            data.titleName = page[1];
            data.url = page[0];
        }
    });    
    
    res.render(data.url,data);
})

app.listen(process.env.PORT || 3000, function(){
    console.log('the server is up!');
})