
export default (state = {}, { type, payload }) => {
    switch (type) {
        case "FETCH-CURRENT-STUDENT_FULFILLED": {
            return payload.data
        }
        case "UPDATE-CURRENT-STUDENT": {
            return payload
        }
        case "STUDENT-REACTION_FULFILLED": {
            const { type, name } = payload.data
            if (state[type]) {
                state[type].push(name)
            } else {
                state[type] = [name]
            }
            return { ...state }
        }
        case "UPDATE-REACTION": {
            const { type, name } = payload
            if (state[type]) {
                state[type].push(name)
            } else {
                state[type] = [name]
            }
            return { ...state }
        }
        default: {
            return state
        }
    }
}