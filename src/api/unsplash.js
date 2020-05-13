import axios from 'axios';
import token from './token';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: token
    }
})