const fs = require('fs');
const express = require("express");
const bodyparser = require('body-parser');
var cors = require('cors');
const jwt = require('jsonwebtoken');
const fileUpload = require('express-fileupload');
const https = require('https');
const app = express();
const axios = require('axios');
const os = require("os");
const async = require('async');
const Search = require('azure-cognitiveservices-visualsearch');
const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials;
require('dotenv').config();

app.use(fileUpload());
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


//getting the user data for the API
let subscription_key = '660d110da5e245dabb96f5cef26a91eb';
let credentials = new CognitiveServicesCredentials(subscription_key);
let endpoint = process.env.ENDPOINT_URL;
if(credentials === '' || credentials === undefined){
    throw new Error('please enter valid subscription in the environment file.')
}

function bufferToStream(buffer) { 
  var stream = new Readable();
  stream.push(buffer);
  stream.push(null);

  return stream;
}
//JWT function 
function auth(req, res, next){
    try {
    const bearerToken = req.headers.authorization.split(" ")[1];

    const response = jwt.verify(bearerToken, process.env.SECRET_KEY, {algorithm: "HS256" })

    req.email=response;

   next();
        
    } catch (error) {
        return res.status(403).send({
            message: 'Authorization failed.'
        });
        
    }
   
}

let visualSearchClient = new Search.VisualSearchClient(credentials); //initializing the visual search client

app.post('/search'/*,auth*/, async (req,res)=>{
    let input = req.body.url;
      
    if(req.body.url !=null){
        let imageInfo = { url: input};
        let filters = {site: "www.google.com"};
        let knowledgeRequest = {filters: filters};
        let visualSearchRequest = JSON.stringify({imageInfo:imageInfo,knowledgeRequest: knowledgeRequest});
        console.log(visualSearchRequest);
        let searchResult;
        try{ //hitting the API to get the result
            searchResult = await visualSearchClient.images.visualSearch({
                knowledgeRequest:visualSearchRequest
            }).then(data=>{res.json(data)}).catch(err=>{res.json(err)});
        console.log(searchResult);
        
        }catch(err){
            console.log(err.message);            
        }
        if(searchResult.image.imageInsightsToken){
            console.log(`image insights token: ${searchResult.image.imageInsightsToken}`);
        }else {
            console.log("Couldn't find image insights token!");
        }
        if (searchResult.tags.length > 0) {
            let firstTagResult = visualSearchResults.tags[0];
            console.log(`Visual search tag count: ${searchResult.tags.length}`);
        
            if (firstTagResult.actions.length > 0) {
                let firstActionResult = firstTagResult.actions[0];
                console.log(`tag action count: ${firstTagResult.actions.length}`);
                console.log(`tag action type: ${firstActionResult.actionType}`);
            }
            else {
                console.log("Couldn't find tag actions!");
            }
        
        }
        else {
            console.log("Couldn't find image tags!");
        }
        
    }else{
        console.log("no input url. Please input url(in request body) in postman console");
        
    }
});

app.listen(6177);