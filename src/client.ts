import fetch from 'node-fetch';
import { data } from "./data";


async function postData(){

    const url='http://95.217.235.69/';

    const postParamethers ={
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:  JSON.stringify(data)
    }

    try {
        let response = await fetch(url,postParamethers);
        let result = await response.json();
      } catch (error) {
        
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
    
    try {
        let response = await fetch(url+email,getParamethers);
        let data = await response.json();
      } catch (error) {
        
      }
}

postData();

getData();


