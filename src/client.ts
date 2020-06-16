import { request } from 'http';
import { data } from './data';
 
async function sendInformation(){
    const req = request(
        {
          host: '95.217.235.69',
          port: '80',
          path: '/',
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          }
        },
        response => {
          console.table(response.statusCode);
        }
      );
      data.credentials.password = process.env.PASSWORD;
    req.write(JSON.stringify(data));
    req.end();    
}

async function showInformation(){
    const req = request(
        {
          host: '95.217.235.69',
          port: '80',
          path: '/angelmrg2000@gmail.com',
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              "x-password": process.env.PASSWORD
          }
        },
        response => {
            console.log(response.statusCode);
        }
      );
    req.end();
}

sendInformation();
showInformation();