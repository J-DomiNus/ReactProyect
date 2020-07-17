import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-92cde.firebaseio.com/'
})

export default instance;