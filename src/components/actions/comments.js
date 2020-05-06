import { axios } from '../custom-module'

export const fetchComments = () => {
    return (dispatch) => dispatch({ type: 'FETCH-COMMENTS', payload: axios.get('comments') })
}

export const approveComment = (time_stamp, approved) => {
    return (dispatch) => dispatch({ type: 'APPROVE-COMMENT', payload: axios.patch(`comments/${time_stamp}/${approved}`) })
}