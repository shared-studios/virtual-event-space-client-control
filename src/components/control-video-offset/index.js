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
    const [duration, setDuration] = useState()
    const { video_url, video_offset, loading, custom_loading } = useSelector(state => state.event)
    const dispatch = useDispatch()

    useEffect(() => {
        if (video_url) {
            const VimeoPlayer = new Vimeo(iframe.current, { url: video_url })
            setPlayer(VimeoPlayer)
            VimeoPlayer.play()
        }
    }, [video_url])

    const formatDuration = (seconds) => {
        const hours = moment.duration(seconds, 'seconds').hours()
        const minute = moment.duration(seconds, 'seconds').minutes()
        const second = moment.duration(seconds, 'seconds').seconds()
        return `${hours}:${minute}:${second}`
    }
    const handleChange = ({ target: { value } }) => {
        setSegment(value)
        setDuration(moment.duration(video_offset[value].duration, 'seconds').asSeconds())
    }

    const handlePublish = () => {
        const offset_value = moment.duration(duration, 'seconds').asSeconds()
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
        const dur = moment.duration(duration, 'seconds')
        if (operation === 'sub') {
            dur.subtract(1, selectedField || 'second')
            setDuration(dur.milliseconds >= 0 ? dur : 0)
        } else {
            dur.add(1, selectedField || 'second')
            setDuration(dur)
        }
    }

    return (
        <div className={styles.video_control}>
            {console.log('VideoControl')}
            <h4>Video Control:</h4>
            <div className={styles.live_video} ref={iframe} />
            <label className={styles.label}>
                Total duration of the event before <b>{segment ? video_offset[segment]?.name : '--'} </b>
                video: {segment ? formatDuration(video_offset[segment]?.duration) : '-:-:-'}
            </label>
            <select className={styles.select} value={segment} onChange={handleChange}>
                <option value=''>select a segment...</option>
                {video_offset.map(({ name }, i) => <option key={i} value={i}>{name} video</option>)}
            </select>
            {segment && <>
                <button
                    className={`${styles.current_duration} ${styles.button} `}
                    onClick={publishCurrentDuration}>
                    Publish Current Duration{loading && '...'}
                </button>
                {console.log(duration)}
                <br />
                <br />
                <h4>Manual time input:</h4>
                <div className={styles.duration}>
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
                        disabled={video_offset[segment].duration === moment.duration(duration, 'seconds').asSeconds()}>
                        Update Time{custom_loading && '...'}
                    </button>
                </div>
                <button
                    className={`${styles.get_current_duration} ${styles.button} `}
                    onClick={() => dispatch(updateVideoOffset(segment, 0))}
                    disabled={!segment}>
                    Reset Current Duration
                </button>
            </>}
        </div>
    )
}

export default React.memo(VideoControl)