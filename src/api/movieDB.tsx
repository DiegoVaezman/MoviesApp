import axios from "axios";



export const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '6b24bdb6f576f0b8f6fe60de415b070e',
        language: 'es-ES'
    }
});

export default movieDB;