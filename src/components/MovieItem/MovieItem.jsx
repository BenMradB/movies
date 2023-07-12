import React from 'react'
import styles from './MovieItem.module.css'

const MovieItem = ({ movie, onClick, children }) => {
    return (
        <li className={styles.movieItem} onClick={() => onClick?.(movie)} >
            {children}
        </li>
    )
}

export default MovieItem