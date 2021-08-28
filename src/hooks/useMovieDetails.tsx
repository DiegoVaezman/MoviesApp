import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditInterface';


interface MovieDetails {
    cast: Cast[];
    isLoading: boolean;
    movieFull?: MovieFull;
}



export const useMovieDetails = ( movieId: number ) => {

    const [state, setstate] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async() => {
        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`)
        const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`)
        
        const [movieDetailsRes, castPromiseRes] = await Promise.all([movieDetailsPromise, castPromise])
    
        setstate({
            isLoading: false,
            movieFull: movieDetailsRes.data,
            cast: castPromiseRes.data.cast
        })
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return {
        ...state
    }

}