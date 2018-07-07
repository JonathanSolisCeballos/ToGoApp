import axios from 'axios';
const host = 'https://togo.auth0.com';
const api = {
    get : (url) => {
        const accessToken = localStorage.getItem('access_token');
        return axios.get(host + url,{headers:{Authorization: `Bearer ${accessToken}`}});
    }
}

export default api;