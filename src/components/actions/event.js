import { axios } from '../custom-module'

export const updateVideoOffset = (video_id, offset_duration) => {
    return (dispatch, getState) => {
        dispatch({ type: 'UPDATE-VIDEO-OFFSET-DURATION_PENDING' })
        axios.patch('events/video-offset', { video_id, offset_duration }, { headers: { "Content-Type": "application/json" } }).then((res) => {
            dispatch({ type: 'UPDATE-VIDEO-OFFSET-DURATION_FULFILLED', payload: res })
            const { event: { video_offset: { current_video } } } = getState()
            console.log(current_video, video_id)
            if (current_video !== video_id) {
                dispatch(updateCurrentVideoId(video_id))
            }
        }).catch((error) => {
            dispatch({ type: 'UPDATE-VIDEO-OFFSET-DURATION_REJECTED', payload: error })
        })
    }
}

export const updateVideoOffsetCustom = (video_id, offset_duration) => {
    return (dispatch) => dispatch({
        type: `UPDATE-VIDEO-OFFSET-DURATION-CUSTOM`,
        payload: axios.patch('events/video-offset', { video_id, offset_duration }, { headers: { "Content-Type": "application/json" } })
    })
}

export const updateCurrentVideoId = (current_video) => {
    return (dispatch) => dispatch({
        type: 'UPDATE-CURRENT-VIDEO-ID',
        payload: axios.patch(`events/video-offset/${current_video}`)
    })
}

