import React from 'react';
import styles from './styles.module.css'
import { useSelector } from 'react-redux'

const Error = () => {
    const error = useSelector(state => state.error)
    return (
        <div className={styles.error}>{error}</div>
    )
}

export default React.memo(Error)
