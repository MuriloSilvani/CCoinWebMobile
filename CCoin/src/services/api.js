import axios from 'axios';

export const apiUsuarios = axios.create({
    baseURL: 'http://192.168.0.18:8090'
})

export const apiItens = axios.create({
    baseURL: 'http://192.168.0.18:8091'
})

export const apiExchanges = axios.create({
    baseURL: 'http://192.168.0.18:8092'
})