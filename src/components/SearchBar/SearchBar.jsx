import React, { useEffect, useRef, useState } from 'react'
import styles from './SearchBar.module.css'
import { useMovies } from '../../context/MoviesProvider';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import { useKey } from '../../hooks/useKey';

const SearchBar = () => {
    const { dispatch } = useMovies();
    const [query, setQuery] = useState('');
    const searchBar = useRef();

    useFetchMovies(query);

    useEffect(() => {
        searchBar.current.focus();
    }, []);

    useKey('Enter', () => {
        if (searchBar.current === document.activeElement) return;
        searchBar.current.focus();
        setQuery('');
        dispatch({ type: 'movies/ready', payload: [] })
    })

    return (
        <input
            type='text'
            placeholder='Search movies ...'
            className={styles.searchBar}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={searchBar}
        />
    )
}


export default SearchBar