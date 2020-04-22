import { axios } from '../custom-module'

export const fetchAgenda = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-AGENDAS', payload: axios.get('agenda') })
    }
}