import React, { useEffect } from 'react';
import Header from '../header'
import Chat from '../chat'
import CurrentStudent from '../current-student'
import LiveVideo from '../live-video'
import CurrentAgenda from '../current-agenda'
import AgendaList from '../agenda-list'
import styles from './styles.module.css'
import Authentication from '../authentication'
import Error from '../error'
import Socket from '../socket'

import { useSelector, useDispatch } from 'react-redux'
import { onPublish } from '../actions/publish'

const LandingPage = (props) => {
    const { event_id, user_id } = props.match.params
    const socket = useSelector(state => state.socket)
    const dispatch = useDispatch()

    useEffect(() => {
        if (socket) {
            socket.on('publish', (data) => {
                dispatch(onPublish(data))
            })
        }
    }, [dispatch, socket])

    return (
        <Authentication eventId={event_id} userId={user_id}>
            <Socket>
                {console.log('LandingPage')}
                <div className={styles.landing_page}>
                    <Header />
                    <AgendaList />
                    <LiveVideo />
                    <CurrentAgenda />
                    <CurrentStudent />
                    <Chat />
                </div>
            </Socket>
            <Error />
        </Authentication>
    )
}

export default React.memo(LandingPage)
