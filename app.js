// jshint esversion:6
/**
 * Server side script for the Easel Share web app.
 */
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const lodash = require("lodash");

const app = express();

// storing the names of pages that should exist
const pages=[['learning', 'Learning'],['art-shows','Art Shows'],['user-page','User Page'], ['easel','My Easel']];

// starting data to pass around
const data = {
    titleName:'Home',
    url: '/'
}

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended:true
}));

// need in order to access public library
app.use(express.static('public'));

// get home page
app.get('/', function(req, res){
    data.titleName = 'Home';
    data.url='index';
    res.render(data.url,data);
})

// the rest of the pages at level 1 after the forward dash
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

// listen through heroku or through local host port
app.listen(process.env.PORT || 3000, function(){
    console.log('the server is up!');
})