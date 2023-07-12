import React, { useEffect, useState } from 'react'
import styles from './MovieDetailsHeader.module.css'
import { useMovies } from '../../context/MoviesProvider';

const MovieDetailsHeader = ({ movie }) => {

    return (
        <header className={styles.header}>
            <img src={movie?.Poster} alt="" />
            <div>
                <h2>{movie?.Title}</h2>
                <p> {movie?.Released} • {movie?.Runtime}</p>
                <p>{movie?.Genre}</p>
                <p>⭐️ {movie?.imdbRating} IMDB Rating</p>
            </div>
        </header>
    )
}

export default MovieDetailsHeader