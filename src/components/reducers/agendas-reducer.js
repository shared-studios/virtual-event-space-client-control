export default (state = { loading: false, disabled: true, agendas: [] }, { type, payload }) => {
    switch (type) {
        case "FETCH-AGENDAS_FULFILLED": {
            return { ...state, agendas: payload.data }
        }
        case "UPDATE-AGENDA_PENDING": {
            return { ...state, loading: true, disabled: false, }
        }
        case "UPDATE-AGENDA_FULFILLED": {
            if (payload) {
                let foundCurrent = false
                const agendas = state.agendas.map((agenda) => {
                    if (agenda.id !== payload && !foundCurrent) {
                        return { ...agenda, status: 'previous' }
                    }
                    if (agenda.id === payload && !foundCurrent) {
                        foundCurrent = true
                        return { ...agenda, status: 'current' }
                    }
                    return { ...agenda, status: 'next' }
                })
                return { ...state, agendas: [...agendas], loading: false, disabled: true }
            }
            state.agendas[0] = { ...state.agendas[0], status: 'current' }
            return { ...state, agendas: [...state.agendas], loading: false, disabled: true }
        }
        default: {
            return state
        }
    }
}