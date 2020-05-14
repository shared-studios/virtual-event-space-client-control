import { axios } from '../custom-module'

export const updateVideoOffset = (video_id, offset_duration, type) => {
    return (dispatch) => dispatch({
        type: `UPDATE-VIDEO-OFFSET-DURATION${type}`,
        payload: axios.patch('events/video-offset', { video_id, offset_duration }, { headers: { "Content-Type": "application/json" } })
    })
}
export const updateCurrentVideoId = (current_video) => {
    return (dispatch) => dispatch({
        type: 'UPDATE-CURRENT-VIDEO-ID',
        payload: axios.patch(`events/video-offset/${current_video}`)
    })
}

