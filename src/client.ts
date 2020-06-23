import { data } from "./data";

const axios = require('axios');
var contraseña = data.credentials.password;

async function sendPost(){
    let res = await axios.post('http://95.217.235.69/', data)
    .then(function(response){
        console.log(response);
    })
    .catch(function (error){
        console.log(error);
    })

}

async function guetData(){
    let res = await axios.get('http://95.217.235.69/jguzaro-2018017@kinal.edu.gt', {
        headers: {
            "Content-Type": "application/json",
            "x-password": contraseña
        }
    })
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(error){
        console.log(error);
    })
}

sendPost();
guetData();




