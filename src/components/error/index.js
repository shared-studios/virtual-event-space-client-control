import React from 'react';
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'

const Error = () => {
    const error = useSelector(state => state.error)
    const dispatch = useDispatch()

    return (
        <div className={styles.error}>{error}</div>
    )
}

export default React.memo(Error)
