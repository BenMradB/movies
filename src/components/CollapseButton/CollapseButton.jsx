import React from 'react'
import styles from './CollapseButton.module.css'
const CollapseButton = ({ onClick, type, children }) => {
    return (
        <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
            <p>{children}</p>
        </button>
    )
}

export default CollapseButton