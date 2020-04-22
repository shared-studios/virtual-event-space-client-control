import { axios } from '../custom-module'

export const fetchUser = (event_id, user_id) => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-USER', payload: axios.get(`user/${event_id}/${user_id}`) })
    }
}