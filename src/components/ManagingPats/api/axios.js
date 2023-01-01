import axios from "axios";
import { patientslist } from "../ListPatients";

export const api = axios.create({
    content: patientslist
})

export const getPosts = async () => {
    const response = await api.get('/posts')
    return response.data
}