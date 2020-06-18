import fetch from 'node-fetch';

const url='http://95.217.235.69/';

//how to import JSON
const data = require("./data.json");
const email = data.contactInfo.emailAddress;
console.log(email); // output 'testing'

//optional paramethers
const postParamethers ={
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body:  JSON.stringify(data)
}

const getParamethers ={
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "x-password": data.credentials.password
    }    
}

//POST
async function postData(){
    let response = await fetch(url,postParamethers);
    let result = await response.json();
    if (response.ok) {
        console.log(result.message);
        console.log("Did a post.");
    } else {
        console.log("HTTP-Error: "+ response.status);
    }
    
}

//GET
async function getData(){
    let response = await fetch(url+email,getParamethers);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        console.log(json.contactInfo.emailAddress);
        console.log("Did a get.");
      } else {
        console.log("HTTP-Error: " + response.status);
      }
}

postData()
.catch((err) => {console.log('ERROR: ', err.message)}); // need catch or it won't work

getData()
.catch((err) => {console.log('ERROR: ', err.message)}); // need catch or it won't work