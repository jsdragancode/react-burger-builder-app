import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-apps-default-rtdb.firebaseio.com/'
});

export default instance;