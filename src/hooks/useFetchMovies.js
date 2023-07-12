import axios from "axios";
import { useEffect } from "react";
import { useMovies } from "../context/MoviesProvider";

const API_KEY = '872a41a9';
const BASE_URL = "https://www.omdbapi.com/";

export const useFetchMovies = (query) => {
    const { dispatch } = useMovies();
    useEffect(() => {
        const controller = new AbortController();
        const URL = `${BASE_URL}?apiKey=${API_KEY}&s=${query}`;
        const fetchData = async () => {
            try {
                dispatch({ type: 'movies/loading' })
                const { data: Search } = await axios.get(`${URL}`, { signal: controller.signal });
                if (Search.Response === 'False') throw new Error(`No movies found for ${query}`);
                dispatch({ type: 'movies/ready', payload: Search.Search });
            } catch (error) {
                if (error.name !== 'CanceledError') dispatch({ type: 'movies/error', payload: error.message });
            }
        }

        if (query.length < 3) return;
        fetchData();

        return () => controller.abort();
    }, [query, dispatch]);
}   