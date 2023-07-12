import React from 'react'
import styles from './Error.module.css'
const Error = ({ error }) => {
    return (
        <div className={styles.error}>
            <span>💥 ERROR 💥 </span>
            <p>
                {error}
            </p>
        </div>
    )
}

export default Error;