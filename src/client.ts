import axios from 'axios'
import { datos } from './data'

const url = 'http://95.217.235.69/'

export const getInfo = async () => {
    datos.credentials.password = process.env.PASSWORD
    const urlString = url+datos.contactInfo.emailAddress
    
    const data = await axios.get(urlString ,{
        headers: {
            "Content-Type": "application/json",
            "x-password": datos.credentials.password
        }
    }).then(res => {
        return res.data
    }).catch(err => {
        return err
    })

    return data
}

export const sendInfo = async () => {
    datos.credentials.password = process.env.PASSWORD
    const data = axios.post(url,datos).then(res => {
        return (res.status, res.data)
    }).catch(err => {
        return err
    })
    return data
}

getInfo();
sendInfo();