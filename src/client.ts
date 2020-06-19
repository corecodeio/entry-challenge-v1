import {data}  from "./data";
import fetch from 'node-fetch';


async function postData(){

    const url='http://95.217.235.69/';

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
        
    } else {
        
    }
    
}


async function getData(){

    const url='http://95.217.235.69/';

    const getParamethers ={
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "x-password": data.credentials.password
        }    
    }

    const email = data.contactInfo.emailAddress;
    let response = await fetch(url+email,getParamethers);
    if (response.ok) { 
        let json = await response.json();
        
      } else {
        
      }
}

postData()
.catch((err) => { });

getData()
.catch((err) => { }); 


