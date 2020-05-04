import { axios } from '../custom-module'

export const authorizeUser = (event_id, user_id) => {
    return (dispatch) => axios.get(`authorize/${event_id}/${user_id}`)
        .then(({ data: { user, event, token } }) => {
            dispatch({ type: 'FETCH-USER_FULFILLED', payload: { token, ...user } })
            dispatch({ type: 'FETCH-EVENT_FULFILLED', payload: event })
        }).catch((error) => {
            dispatch({ type: 'ERROR', payload: error })
        })
}