import React, {useEffect} from 'react';
import dotenv from 'dotenv'
const request = require("request");
const {REACT_APP_GET_GAMES, REACT_APP_CLIENT_ID, REACT_APP_GET_TOKEN, REACT_APP_CLIENT_SECRET, REACT_APP_GET_FIELDS} = process.env;
dotenv.config();

export const gameRequest = (accessToken) => {
    setTimeout(() => {
    const gameOptions = {
        url: REACT_APP_GET_GAMES,
        method: 'GET',
        headers:{
            'Client-ID': REACT_APP_CLIENT_ID,
            'Authorization': 'Bearer ' + accessToken,
            "Accept": "application/json"
        },
    }
    if(!accessToken){
        console.log("No Token");
    }else{
        console.log(gameOptions);
    
    request.get(gameOptions,(err,res,body) => {
        if(err){
            return console.log(err);
        }
        console.log('Status: ${res.statusCode}');
        console.log(JSON.parse(body));
    });
    };
    },2000)
    }

const options = {
    url: REACT_APP_GET_TOKEN,
    json:true,
    body: {
    client_id: REACT_APP_CLIENT_ID,
    client_secret: REACT_APP_CLIENT_SECRET,
    grant_type: 'client_credentials'
    
    }
    
};

// (function() {
//     var cors_api_host = 'cors-anywhere.herokuapp.com';
//     var cors_api_url = 'https://' + cors_api_host + '/';
//     var slice = [].slice;
//     var origin = window.location.protocol + '//' + window.location.host;
//     var open = XMLHttpRequest.prototype.open;
//     XMLHttpRequest.prototype.open = function() {
//         var args = slice.call(arguments);
//         var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
//         if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
//             targetOrigin[1] !== cors_api_host) {
//             args[1] = cors_api_url + args[1];
//         }
//         return open.apply(this, args);
//     };
// })();

request.post(options, (err,res,body)=>{
    
    if(err){
        return console.log(err);
    }
    console.log('Status: ${res.statusCode}');
    console.log(body.access_token);
    gameRequest(body.access_token);
    
});

