import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateVideoOffset, updateVideoOffsetCustom } from '../actions/event'
import moment from 'moment/moment'
import Vimeo from '@vimeo/player'

const VideoControl = () => {
    const iframe = useRef()
    const [segment, setSegment] = useState()
    const [player, setPlayer] = useState()
    const [selectedField, setSelectedField] = useState()
    const [duration, setDuration] = useState({ 'hr': 0, 'min': 0, 'sec': 0 })
    const event = useSelector(state => state.event)
    const { video_url, video_offset, loading, custom_loading } = event
    const dispatch = useDispatch()

    useEffect(() => {
        if (video_url) {
            const VimeoPlayer = new Vimeo(iframe.current, { url: video_url })
            setPlayer(VimeoPlayer)
            VimeoPlayer.play()
        }
    }, [video_url])

    const updateDuration = (seconds) => {
        const hours = moment.duration(seconds, 'seconds').hours()
        const minute = moment.duration(seconds, 'seconds').minutes()
        const second = moment.duration(seconds, 'seconds').seconds()
        setDuration({ 'hr': hours, 'min': minute, 'sec': second })
    }

    const handleChange = ({ target: { value } }) => {
        setSegment(value)
        updateDuration(video_offset[value])
    }

    const handlePublish = () => {
        const { hr, min, sec } = duration
        const offset_value = moment.duration({ hours: hr, minutes: min, seconds: sec }).asSeconds()
        dispatch(updateVideoOffsetCustom(segment, offset_value))
    }

    const publishCurrentDuration = () => {
        player.getCurrentTime().then((duration) => {
            const hours = moment.duration(duration, 'seconds').hours()
            const minutes = moment.duration(duration, 'seconds').minutes()
            const seconds = moment.duration(duration, 'seconds').seconds()
            const offset_value = moment.duration({ hours, minutes, seconds }).asSeconds()
            dispatch(updateVideoOffset(segment, offset_value))
        })
    }

    const changeDuration = (operation) => {
        if (operation === 'sub') {
            if (selectedField) {
                const value = duration[selectedField] - 1
                setDuration({ ...duration, [selectedField]: value >= 0 ? value : 0 })
            } else {
                const value = duration.sec - 1
                setDuration({ ...duration, sec: value >= 0 ? value : 0 })
            }
        } else {
            if (selectedField) {
                setDuration({ ...duration, [selectedField]: duration[selectedField] + 1 })
            } else {
                setDuration({ ...duration, sec: duration.sec + 1 })
            }
        }
    }

    return (
        <div className={styles.video_control}>
            {console.log('VideoControl')}
            <h4>Video Control:</h4>
            <div className={styles.live_video} ref={iframe} />
            <label className={styles.label}>
                Duration Offset (hh:mm:ss): {segment && `${duration.hr}:${duration.min}:${duration.sec}`}
            </label>
            <select className={styles.select} value={segment} onChange={handleChange}>
                <option value=''>select a segment...</option>
                {Object.keys(video_offset).map((segment, i) => <option key={i} value={segment}>{segment}</option>)}
            </select>
            {segment && <>
                <button
                    className={`${styles.current_duration} ${styles.button}`}
                    onClick={publishCurrentDuration}>
                    Publish Current Duration{loading && '...'}
                </button>
                <div className={styles.duration}>
                    <button className={styles.duration_button} onClick={() => changeDuration('sub')}>-</button>
                    <div
                        className={`${styles.field} ${selectedField === 'hr' && styles.selected_field}`}
                        onClick={() => setSelectedField('hr')}>
                        {duration.hr} hr
                    </div>
                    <div
                        className={`${styles.field} ${selectedField === 'min' && styles.selected_field}`}
                        onClick={() => setSelectedField('min')}>
                        {duration.min} min
                    </div>
                    <div
                        className={`${styles.field} ${selectedField === 'sec' && styles.selected_field}`}
                        onClick={() => setSelectedField('sec')}>
                        {duration.sec} sec
                    </div>
                    <button className={styles.duration_button} onClick={changeDuration}>+</button>
                    <button
                        className={`${styles.get_current_duration} ${styles.button}`}
                        onClick={() => player.getCurrentTime().then(updateDuration)}>
                        Get Current Duration
                    </button>
                    <button
                        className={`${styles.publish} ${styles.button}`}
                        onClick={handlePublish}
                        disabled={!segment}>
                        Publish{custom_loading && '...'}
                    </button>
                </div>
            </>}
        </div>
    )
}

export default React.memo(VideoControl)