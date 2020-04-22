import { axios } from '../custom-module'

export const publishAll = (data) => {
    return (dispatch) => {
        console.log(data)
        dispatch({ type: 'PUBLISH', payload: axios.put('publish', data, { headers: { 'Content-Type': 'application/json' } }) })
    }
}

export const onPublish = ({ agenda, student }) => {
    return (dispatch) => {
        console.log({ agenda, student })
        if (agenda) {
            dispatch({ type: 'UPDATE-CURRENT-AGENDA', payload: agenda.index })
        }
        if (student) {
            dispatch({ type: 'UPDATE-CURRENT-STUDENT', payload: student })
        }
    }
}