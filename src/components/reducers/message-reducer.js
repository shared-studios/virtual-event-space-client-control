
export default (state = [], { type, payload }) => {
    switch (type) {

        case "FETCH-MESSAGES_FULFILLED": {
            return payload.data
        } case "POST-MESSAGE_FULFILLED": {
            state.push(payload.data)
            return [...state]
        }
        case 'NEW-APPROVE-MESSAGE': {
            state.push(payload)
            return [...state]
        }
        case "NEW-MESSAGE": {
            if (!payload.approved) {
                const newState = state.filter((message) => message.time_stamp !== payload.time_stamp)
                return [...newState]
            }

            const found = state.find((message) => message.time_stamp === payload.time_stamp)
            if (!found && payload.approved) {
                state.push(payload)
                return [...state]
            }

            return [...state]
        }
        default: {
            return state
        }
    }
}