import { axios } from '../custom-module'

export const fetchAgendas = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-AGENDAS', payload: axios.get('agendas') })
    }
}

export const updateCurrentAgenda = (agenda_id) => {
    return (dispatch) => {
        if (agenda_id) {
            dispatch({ type: 'UPDATE-AGENDA_PENDING' })
            axios.patch(`agendas/current/${agenda_id}`).then(() => {
                dispatch({ type: 'UPDATE-AGENDA_FULFILLED', payload: agenda_id })
            }).catch((error) => {
                dispatch({ type: 'ERROR', payload: error })
            })
        }
    }
}