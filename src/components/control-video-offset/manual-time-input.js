import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateVideoOffsetCustom } from '../actions/event'
import moment from 'moment/moment'

const ManualTimeInput = ({ videoId, player }) => {
    const [selectedField, setSelectedField] = useState('seconds')
    const video = useSelector(state => state.event.video_offset.list[videoId])
    const [duration, setDuration] = useState(video.offset_duration)
    const custom_loading = useSelector(state => state.event.custom_loading)
    const dispatch = useDispatch()

    useEffect(() => setDuration(video.offset_duration), [video])

    const handlePublish = () => {
        const offsetDuration = moment.duration(duration, 'seconds').asSeconds()
        console.log(offsetDuration)
        dispatch(updateVideoOffsetCustom(video.id, offsetDuration))
    }

    const changeDuration = (operation) => {
        const dur = moment.duration(duration, 'seconds')
        if (operation === 'sub') {
            dur.subtract(1, selectedField)
            setDuration(dur.asMilliseconds() >= 0 ? dur : 0)
        } else {
            dur.add(1, selectedField)
            setDuration(dur)
        }
        console.log(selectedField)

    }

    return (
        <>
            <div className={styles.manual_time_input}>
                <button className={styles.duration_button} onClick={() => changeDuration('sub')}>-</button>
                <div
                    className={`${styles.field} ${selectedField === 'hour' && styles.selected_field} `}
                    onClick={() => setSelectedField('hour')}>
                    {moment.duration(duration, 'seconds').hours()} hr
                    </div>
                <div
                    className={`${styles.field} ${selectedField === 'minute' && styles.selected_field} `}
                    onClick={() => setSelectedField('minute')}>
                    {moment.duration(duration, 'seconds').minutes()} min
                    </div>
                <div
                    className={`${styles.field} ${selectedField === 'second' && styles.selected_field} `}
                    onClick={() => setSelectedField('second')}>
                    {moment.duration(duration, 'seconds').seconds()} sec
                    </div>
                <button className={styles.duration_button} onClick={changeDuration}>+</button>
                <button
                    className={`${styles.get_current_duration} ${styles.button} `}
                    onClick={() => player.getCurrentTime().then((s) => setDuration(s))}>
                    Get Current Duration
                    </button>
                <button
                    className={`${styles.publish} ${styles.button} `}
                    onClick={handlePublish}
                    disabled={video.offset_duration === moment.duration(duration, 'seconds').asSeconds()}>
                    Update Time{custom_loading && '...'}
                </button>
            </div>
        </>
    )
}

export default React.memo(ManualTimeInput)