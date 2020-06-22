
import axios from "axios"
import datos from "./datos.json"


async function postData() {
  axios.post('http://95.217.235.69/',datos)
  .then(function(response){
    console.log(response);
  }).catch(function(error){
    console.log(error);
  })
}


function getData() {
  axios.get(`http://95.217.235.69/${process.env.EMAIL}`,{
    
    
    headers:{
      "Content-Type": "application/json",
      "x-password": process.env.PASSWORD,
    }
  }).then(function(response){
    console.log(response);
  }).catch(function(error){
    console.log(error);
  })
}

postData();
var s = 0