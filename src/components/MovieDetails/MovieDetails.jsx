import React, { useEffect, useState } from 'react'
import styles from './MovieDetails.module.css'
import { Error, Loader, MovieDetailsHeader, StarsRating } from '..'
import axios from 'axios';
import { useMovies } from '../../context/MoviesProvider';
import { useKey } from '../../hooks/useKey';

const API_KEY = '872a41a9';
const BASE_URL = "https://www.omdbapi.com/";

const MovieDetails = ({ selectedMovie, onCloseSelectedMovie }) => {
    const { watchedMovies, dispatch } = useMovies();
    const [movie, setMovie] = useState(null);
    const [selectedMovieRatingByUser, setSelectedMovieRatingByUser] = useState(0);
    const [isMovieLoading, setIsMovieLoading] = useState(false);
    const [movieError, setMovieError] = useState(null);

    const InTheWatchedMovies = watchedMovies.map(movie => movie.imdbID).includes(selectedMovie.imdbID);
    const watchedMovie = watchedMovies.filter(movie => movie.imdbID === selectedMovie.imdbID)[0];

    const addToWatchedListHandler = () => {
        const addedMovie = { ...movie, userRating: selectedMovieRatingByUser };
        dispatch({ type: 'movies/watched/add', payload: addedMovie });
    }

    useEffect(() => {
        const URL = `${BASE_URL}?apiKey=${API_KEY}&i=${selectedMovie.imdbID}`;

        const fetchMovie = async () => {
            try {
                setIsMovieLoading(true);
                setMovieError(null);
                const { data } = await axios.get(`${URL}`);
                setMovie(data);
            } catch (error) {
                setMovieError(error.message);
            } finally {
                setIsMovieLoading(false)
            }
        }

        fetchMovie();
    }, [selectedMovie.imdbID])

    useEffect(() => {
        document.title = `Movie | ${selectedMovie.Title}`;

        return () => document.title = 'Movies App'
    }, [selectedMovie.imdbID]);

    useKey('Escape', onCloseSelectedMovie)

    if (isMovieLoading) return <Loader />

    if (movieError) return <Error error={movieError} />

    return (
        <>
            {
                !movieError && !isMovieLoading &&
                <>
                    <MovieDetailsHeader movie={movie} />
                    {
                        !InTheWatchedMovies ?
                            <StarsRating onCloseSelectedMovie={onCloseSelectedMovie} addToWatchedListHandler={addToWatchedListHandler} setState={setSelectedMovieRatingByUser} />
                            :
                            <p className={styles.watched}>You rated <b>{selectedMovie.Title}</b> with <b>{watchedMovie?.userRating} ⭐️</b>  </p>
                    }
                    <div className={styles.details}>
                        <div>
                            <h3>Plot</h3>
                            <p>{movie?.Plot}</p>
                        </div>
                        <div>
                            <h3>Actors</h3>
                            <p>{movie?.Actors}</p>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default MovieDetails