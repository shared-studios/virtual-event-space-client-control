import React from 'react'
import styles from './styles.module.css'
import EventInfo from '../event-info'
import AgendaControl from '../control-agendas'
import VideoControl from '../control-video-offset'

const ControlPage = () => {

    return (
        <div className={styles.control_page}>
            {console.log('ControlPage')}
            <EventInfo />
            <AgendaControl />
            <VideoControl />
        </div>
    )
}

export default React.memo(ControlPage)
