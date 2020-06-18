import axios from 'axios';
import data from './data';

async function createProfile(){

    data.credentials.password = process.env.PASSWORD;
    data.contactInfo.emailAddress = process.env.EMAIL;
    
    axios.post('http://95.217.235.69/', data).then(
        res => {
            console.log(`Status: ${res.status}`);
            console.log('Body: ', res.data);
            listProfile();
        }
    )
        .catch((err) => {
            console.error('error ' + err);
        });
};

async function listProfile(){


    const URL = "http://95.217.235.69/"
    axios.get(URL + process.env.EMAIL,
        { headers: { "x-password": process.env.PASSWORD, "Content-Type": "application/json" } }
    )
        .then(res => {
            console.log(res.data);

        })
        .catch((error) => {
            console.log('error ' + error);
        });

};

export const ejecutarCliente = () => {
    console.log(createProfile());
};

ejecutarCliente();