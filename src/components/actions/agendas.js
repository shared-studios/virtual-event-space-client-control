import { axios } from '../custom-module'

export const updateCurrentAgenda = (agenda_id) => {
    return (dispatch) => { dispatch({ type: 'UPDATE-AGENDA', payload: axios.patch(`events/agendas/${agenda_id}`) }) }
}