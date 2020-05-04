import { axios } from '../custom-module'

export const updateVideoOffset = (segment_id, offset_value) => {
    return (dispatch) => dispatch({
        type: 'UPDATE-VIDEO-OFFSET',
        payload: axios.patch('events/video-offset', JSON.stringify({ segment_id, offset_value }), { headers: { "Content-Type": "application/json" } })
    })
}