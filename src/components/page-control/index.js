import React from 'react'
import styles from './styles.module.css'
import Authentication from '../authentication'
import EventInfo from '../event-info'
import AgendaControl from '../control-agendas'
import VideoControl from '../video-control'

const ControlPage = (props) => {
    const { event_id, user_id } = props.match.params

    return (
        <Authentication eventId={event_id} userId={user_id}>
            {console.log('ControlPage')}
            <div className={styles.control_page}>
                <EventInfo />
                <AgendaControl />
                <VideoControl />
            </div>
        </Authentication>
    )
}

export default React.memo(ControlPage)
