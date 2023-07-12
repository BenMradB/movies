import React, { useState } from 'react'
import styles from './Box.module.css'
import CollapseButton from '../CollapseButton/CollapseButton';

const Box = ({ children }) => {
    const [collapse, setCollapse] = useState(false);
    return (
        <div className={styles.box}>
            {!collapse && children}
            <CollapseButton type='collapse' onClick={() => setCollapse(curr => !curr)}>
                {collapse ? '+' : '–'}
            </CollapseButton>
        </div>
    )
}

export default Box