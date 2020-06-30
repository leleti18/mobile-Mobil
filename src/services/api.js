import axios from 'axios'

const api = axios.create({
    baseUrl: 'http://192.168.2.11:3333',
});

export default api; 