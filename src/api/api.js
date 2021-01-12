import axios from 'axios'


export const Api = axios.create({
    baseURL: 'https://tash-times.herokuapp.com/api/auth',
})