export default (state = { loading: false, list: [], current: '0' }, { type, payload }) => {
    switch (type) {
        case "FETCH-AGENDAS_FULFILLED": {
            const { list, current } = payload
            return { ...state, list, current }
        }
        case "UPDATE-AGENDA_PENDING": {
            return { ...state, loading: true }
        }
        case "UPDATE-AGENDA_FULFILLED": {
            return { ...state, current: payload.data, loading: false }
        }
        case "UPDATE-AGENDA_REJECTED": {
            return { ...state, loading: false }
        }
        default: {
            return state
        }
    }
}