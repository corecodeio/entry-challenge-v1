import axios from 'axios';
import express from 'express';
import data from './data';

const router = express.Router();


const url = 'http://95.217.235.69/'

router.post('/sendInformation', async(req, res) => {
    try {
        let result = await axios.post(url, data);
        res.json(result.data);
    }
    catch(error){
        return error;
    }
});

export default router;