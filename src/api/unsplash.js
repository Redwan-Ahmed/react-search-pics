import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID MUumdS-0ueZ3QEueosjplUDEkf7hXkxx1UNH-bQn1Z8' }
});
