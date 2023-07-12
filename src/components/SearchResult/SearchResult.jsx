import React from 'react'
import styles from './SearchResult.module.css'
import { useMovies } from '../../context/MoviesProvider'

const SearchResult = () => {
    const { movies } = useMovies();
    return (
        <p className={styles.searchResult}>Found <b>{movies.length}</b> result(s) </p>
    )
}


export default SearchResult