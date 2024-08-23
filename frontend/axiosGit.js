import axios from 'axios';

const git = axios.create({
    baseURL: 'https://api.github.com/users/garrychrstn/',
    headers: {
        'Content-Type' : 'application/json',
    }
})

export default git;