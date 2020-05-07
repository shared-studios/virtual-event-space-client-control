export default (state = { loading: false, disabled: true, agendas: [], current: '0' }, { type, payload }) => {
    switch (type) {
        case "FETCH-AGENDAS_FULFILLED": {
            return { ...state, ...payload.data }
        }
        case "UPDATE-AGENDA_PENDING": {
            return { ...state, loading: true, disabled: false, }
        }
        case "UPDATE-AGENDA_FULFILLED": {
            return { ...state, current: payload.data, loading: false, disabled: true }
        }
        default: {
            return state
        }
    }
}