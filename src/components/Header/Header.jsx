import React from 'react'
import styles from './Header.module.css'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import SearchResult from '../SearchResult/SearchResult'

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <SearchBar />
            <SearchResult />
        </header>
    )
}

export default Header