import {user} from "./data";

const a = require('axios');

async function postEnv(){
    var result = await a.post('http://95.217.235.69/', user)
    .then(function(response){
        console.log(response)
    })
    console.log(result)
}

async function getEnv(){
    var result = await a.get('http://95.217.235.69/cjimenez-2018078@kinal.edu.gt', 
        {headers:{
            "Content-Type": "application/json",
            "x-password": "erKMSQZC2002"
        }
    })
    console.log(result.data)
}

postEnv();
getEnv();