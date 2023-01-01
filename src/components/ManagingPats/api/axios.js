import axios from "axios";
import { allpatients } from "../ListPats";

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async () => {
    const response = await api.get('/posts')
    return response.data
}