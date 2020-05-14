import React from 'react';
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateVideoOffset } from '../actions/event'
import moment from 'moment/moment'

const CurrentTimeInput = ({ videoId, player }) => {
    const loading = useSelector(state => state.event.loading)
    const dispatch = useDispatch()

    const publishCurrentDuration = () => {
        player.getCurrentTime().then((duration) => {
            const hours = moment.duration(duration, 'seconds').hours()
            const minutes = moment.duration(duration, 'seconds').minutes()
            const seconds = moment.duration(duration, 'seconds').seconds()
            const offsetDuration = moment.duration({ hours, minutes, seconds }).asSeconds()
            dispatch(updateVideoOffset(videoId, offsetDuration, ''))
        })
    }

    return <button
        className={`${styles.current_time_input} ${styles.button} `}
        onClick={publishCurrentDuration}>
        Publish Current Duration{loading && '...'}
    </button>

}

export default React.memo(CurrentTimeInput)