import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateCurrentVideoId } from '../actions/event'
import moment from 'moment/moment'
import Vimeo from '@vimeo/player'
import ManualTimeInput from './manual-time-input'
import CurrentTimeInput from './current-time-input'

const VideoControl = () => {
    const iframe = useRef()
    const [player, setPlayer] = useState()
    const { video_url, video_offset, current_video_loading } = useSelector(state => state.event)
    const { current_video, list: video_offset_list } = video_offset
    const [videoId, setVideoId] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        if (current_video !== 'null') {
            setVideoId(current_video)
        }
    }, [current_video])

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

    const handleChange = ({ target: { value } }) => setVideoId(value)

    return (
        <div className={styles.video_control}>
            {console.log('VideoControl')}
            <h3>Live Video:</h3>
            <div className={styles.live_video} ref={iframe} />
            <label className={styles.label}>
                Total duration of the event before <b>{videoId ? video_offset_list[videoId]?.name : '--'} </b>
                video: <b>{videoId ? formatDuration(video_offset_list[videoId]?.offset_duration) : '-:-:-'}</b>
            </label>
            <select className={styles.select} value={videoId} onChange={handleChange}>
                <option value=''>select a video...</option>
                {video_offset_list.map(({ name, id }, i) => <option key={i} value={id}>{name} video</option>)}
            </select>
            {videoId && <>
                <br />
                <br />
                <h4>Current duration input:</h4>
                <CurrentTimeInput videoId={videoId} player={player} />
                <br />
                <br />
                <h4>Manual duration input:</h4>
                <ManualTimeInput videoId={videoId} player={player} />
                {current_video !== videoId ?
                    <button
                        className={`${styles.start} ${styles.button} `}
                        onClick={() => dispatch(updateCurrentVideoId(videoId))}>
                        Publish{current_video_loading && '...'}
                    </button>
                    :
                    <button
                        className={`${styles.stop} ${styles.button} `}
                        onClick={() => dispatch(updateCurrentVideoId('null'))}>
                        Unpublish{current_video_loading && '...'}
                    </button>
                }
            </>}
        </div>
    )
}

export default React.memo(VideoControl)