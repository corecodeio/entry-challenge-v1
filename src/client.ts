import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({path: 'variables.env'});
import data from './data';
import server from './server';


const url = 'http://95.217.235.69/'

server.post('/sendInformation', async(req, res) => {
    try {
        let result = await axios.post(url, data);
        res.json(result.data);
    }
    catch(error){
        return error;
    }
});

server.get('/getKey/:email', async(req, res) => {
    try{
        let endpoint = url + req.params.email;
        let options = {
            headers: {
                'x-password': process.env.PASS,
                'Content-Type': 'application/json'
            }
        }
        let result = await axios.get(endpoint, options);
        res.json(result.data);
    }
    catch(error){
        return error;
    }
})


server.listen("8081", () => {
    console.log('listening 8081');
})