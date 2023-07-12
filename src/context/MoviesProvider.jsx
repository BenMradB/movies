import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
    movies: [],
    watchedMovies: JSON.parse(localStorage.getItem('watchedMovies')) || [],
    isLoading: false,
    error: null
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'movies/ready': return {
            ...state,
            movies: payload,
            isLoading: false,
            error: null,
        };
        case 'movies/watched/add':
            localStorage.setItem('watchedMovies', JSON.stringify([...state.watchedMovies, payload]))
            return {
                ...state,
                watchedMovies: [...state.watchedMovies, payload]
            };
        case 'movies/watched/delete':
            localStorage.setItem('watchedMovies', JSON.stringify(state.watchedMovies.filter(movie => movie.imdbID !== payload)))
            return {
                ...state,
                watchedMovies: state.watchedMovies.filter(movie => movie.imdbID !== payload)
            };
        case 'movies/loading': return {
            ...state,
            isLoading: true,
            error: null
        };
        case 'movies/error': return {
            ...state,
            isLoading: false,
            error: payload
        };
        case 'movies/stop/loading': return {
            ...state,
            isLoading: false
        }

        default: throw new Error('Unknown type: ' + type);
    }
};



const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { movies, watchedMovies, isLoading, error } = state;

    return <MoviesContext.Provider value={{
        movies,
        watchedMovies,
        dispatch,
        isLoading,
        error
    }}>
        {children}
    </MoviesContext.Provider>
}

const useMovies = () => {
    const context = useContext(MoviesContext);
    if (!context) throw new Error('Context used outside a provider');
    return context;
}

export { MoviesProvider, useMovies }