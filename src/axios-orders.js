import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-58e3e-default-rtdb.firebaseio.com/'
});

export default instance;