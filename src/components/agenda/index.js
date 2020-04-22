import React from 'react';
import styles from './styles.module.css'
import moment from 'moment'

const Agenda = ({ time, title, status }) => {
    return (
        <div className={`${styles.agenda} ${styles[status]}`}>
            <p className={styles.time}>{moment(time).format('h:mm a')}</p>
            <p className={styles.title}>{title}</p>
        </div>
    )
}

export default React.memo(Agenda)
