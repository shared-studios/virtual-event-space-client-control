import { axios } from '../custom-module'

export const fetchAgendas = () => {
    return (dispatch) => { dispatch({ type: 'FETCH-AGENDAS', payload: axios.get('agendas') }) }
}

export const updateCurrentAgenda = (agenda_id) => {
    return (dispatch) => { dispatch({ type: 'UPDATE-AGENDA', payload: axios.patch(`agendas/current/${agenda_id}`) }) }
}