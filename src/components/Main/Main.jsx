import React from 'react';
import styles from './Main.module.css'

const Main = ({ children }) => {
    return (
        <main className={styles.main}>
            <div className={styles.mainContent}>
                {children}
            </div>
        </main>
    )
}

export default Main