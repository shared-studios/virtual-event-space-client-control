import React from 'react';
import styles from './styles.module.css'
import { useSelector } from 'react-redux'

const EventInfo = () => {
    const event = useSelector(state => state.event)
    return (
        <div className={styles.event}>
            <h4>Event info:</h4>
            <p>name: {event.title}</p>
            <p>date: {event.date}</p>
        </div>
    )
}

export default React.memo(EventInfo)
