import axios from 'axios';
import data from './data';
import getPassword from './function/pass'

export const createProfile = async () => {

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

export const listProfile = () => {


    console.log(getPassword());
    const URL = "http://95.217.235.69/saullopezc@gmail.com"
    axios.get(URL,
        { headers: { "x-password": getPassword(), "Content-Type": "application/json" } }
    )
        .then(res => {
            console.log(res.data);

        })
        .catch((error) => {
            console.log('error ' + error);
        });

};

const ejecutar_cliente = () => {
    console.log(createProfile());
};

ejecutar_cliente();