import React from 'react'
import styles from './MoviesList.module.css'
import { useMovies } from '../../context/MoviesProvider'
import MovieItem from '../MovieItem/MovieItem';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const MoviesList = ({ setSelectedMovieHandler }) => {
    const { movies, isLoading, error } = useMovies();
    if (isLoading) return <Loader />
    if (error) return <Error error={error} />
    return (
        <ul className={styles.moviesList}>
            {
                movies.map((movie, i) =>
                    <MovieItem key={i} movie={movie} onClick={setSelectedMovieHandler}>
                        <img src={movie.Poster} alt="" />
                        <div className='info'>
                            <h3> {movie.Title} </h3>
                            <div>
                                <p>
                                    <span>📅</span>
                                    <span> {movie.Year} </span>
                                </p>
                            </div>
                        </div>

                    </MovieItem>
                )
            }
        </ul>
    )
}

export default MoviesList