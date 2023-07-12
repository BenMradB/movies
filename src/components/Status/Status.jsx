import React from 'react'
import styles from './Status.module.css'
import { useMovies } from '../../context/MoviesProvider';

const Status = ({ children }) => {
    const { watchedMovies } = useMovies();
    const imdbAverageRating = watchedMovies.reduce((acc, curr) => acc + +curr.imdbRating, 0) / watchedMovies.length;
    const userAverageRating = watchedMovies.reduce((acc, curr) => acc + +curr.userRating, 0) / watchedMovies.length;
    const runtimeAverage = watchedMovies.reduce((acc, curr) => acc + (+curr.Runtime.split(' ')[0] || 60), 0)

    return (
        <div className={styles.status}>
            <h2>Movies You Watched</h2>
            <div>
                <p>
                    <span>#️⃣</span>
                    <span> {watchedMovies.length} </span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span> {imdbAverageRating ? imdbAverageRating.toFixed(1) : 0} </span>
                </p>
                <p>
                    <span>🌟</span>
                    <span> {userAverageRating ? userAverageRating.toFixed(1) : 0} </span>
                </p>
                <p>
                    <span>⏳</span>
                    <span>{runtimeAverage ? runtimeAverage : 0} min</span>
                </p>
            </div>
        </div>
    )
}

export default Status