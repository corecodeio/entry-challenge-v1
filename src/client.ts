import {data}  from "./data";
import fetch from 'node-fetch';


//POST
async function postData(){

    const url='http://95.217.235.69/';

    //optional paramethers
    const postParamethers ={
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:  JSON.stringify(data)
    }

    let response = await fetch(url,postParamethers);
    let result = await response.json();
    if (response.ok) {
        console.log("Did a post.");
    } else {
        console.log("HTTP-Error: "+ response.status);
    }
    
}

//GET
async function getData(){

    const url='http://95.217.235.69/';

    //optional paramethers
    const getParamethers ={
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "x-password": data.credentials.password
    }    
}

    const email = data.contactInfo.emailAddress;
    let response = await fetch(url+email,getParamethers);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        console.log("Did a get.");
        console.log(json.bienvenido.claveDeAcceso);
      } else {
        console.log("HTTP-Error: " + response.status);
      }
}

postData()
.catch((err) => {console.log('ERROR: ', err.message)}); // need catch or it won't work

getData()
.catch((err) => {console.log('ERROR: ', err.message)}); // need catch or it won't work
