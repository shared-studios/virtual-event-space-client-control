import React from 'react';
import styles from './styles.module.css'
import moment from 'moment'
import { useSelector } from 'react-redux'

const CurrentAgenda = () => {
    const agenda = useSelector(state => state.agendas.filter((agenda) => agenda.status === 'current')[0])

    return (
        <div className={styles.current_agenda}>
            {console.log('CurrentAgenda')}
            {agenda && <p className={styles.time_title}>{moment(agenda.time).format('h:mmA')}_{agenda.title}</p>}
            {agenda && <p className={styles.description}>{agenda.description}</p>}
        </div>
    )
}

export default React.memo(CurrentAgenda)