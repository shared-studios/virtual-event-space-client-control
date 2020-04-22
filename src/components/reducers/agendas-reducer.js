export default (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH-AGENDAS_FULFILLED": {
            return payload.data
        }
        case "UPDATE-CURRENT-AGENDA": {
            if (payload) {
                let foundCurrent = false
                const agendas = state.map((agenda) => {
                    if (agenda.index !== payload && !foundCurrent) {
                        return { ...agenda, status: 'previous' }
                    }
                    if (agenda.index === payload && !foundCurrent) {
                        foundCurrent = true
                        return { ...agenda, status: 'current' }
                    }
                    return { ...agenda, status: 'next' }
                })
                return [...agendas]
            } else {
                state[0] = { ...state[0], status: 'current' }
                return [...state]
            }
        }
        default: {
            return state
        }
    }
}