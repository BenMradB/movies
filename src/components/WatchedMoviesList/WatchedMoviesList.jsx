import React from 'react'
import styles from './WatchedMoviesList.module.css'
import { useMovies } from '../../context/MoviesProvider';
import MovieItem from '../MovieItem/MovieItem';
import CollapseButton from '../CollapseButton/CollapseButton';

const WatchedMoviesList = () => {
    const { watchedMovies, dispatch } = useMovies();
    return (
        <ul>
            {watchedMovies.map((movie, i) =>
                <MovieItem key={i}>
                    <img src={movie.Poster} alt="" />
                    <div className='info'>
                        <h3> {movie.Title} </h3>
                        <div>
                            <p>
                                <span>⭐️</span>
                                <span> {movie.imdbRating}</span>
                            </p>
                            <p>
                                <span>🌟</span>
                                <span> {(+movie.userRating).toFixed(1)} </span>
                            </p>
                            <p>
                                <span>⏳</span>
                                <span>{movie.Runtime}</span>
                            </p>
                            <CollapseButton type='delete' onClick={() => dispatch({ type: 'movies/watched/delete', payload: movie.imdbID })}> X </CollapseButton>

                        </div>
                    </div>
                </MovieItem>
            )}
        </ul>
    )
}

export default WatchedMoviesList