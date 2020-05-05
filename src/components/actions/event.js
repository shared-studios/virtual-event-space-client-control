import { axios } from '../custom-module'

export const updateVideoOffset = (segment_id, offset_value) => {
    return (dispatch) => dispatch({
        type: 'UPDATE-VIDEO-OFFSET',
        payload: axios.patch('events/video-offset', { segment_id, offset_value }, { headers: { "Content-Type": "application/json" } })
    })
}

export const updateVideoOffsetCustom = (segment_id, offset_value) => {
    return (dispatch) => dispatch({
        type: 'UPDATE-VIDEO-OFFSET-CUSTOM',
        payload: axios.patch('events/video-offset', { segment_id, offset_value }, { headers: { "Content-Type": "application/json" } })
    })
}