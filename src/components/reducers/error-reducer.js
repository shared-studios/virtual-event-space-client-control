
export default (state = {}, { type, payload }) => {
    if (type.endsWith("_REJECTED")) {
        type = "ERROR"
    }
    switch (type) {
        case "ERROR": {
            const index = Object.values(state).length
            if (payload?.response?.status === 500) {
                state[index] = { message: "request field", index }
                return { ...state }
            }
            if (payload?.response?.data?.message) {
                state[index] = { message: payload.response.data.message, index }
                return { ...state }
            }
            if (payload?.message === "Network Error") {
                state[index] = { message: payload.message, index }
                return { ...state }
            } if (payload?.message) {
                state[index] = { message: payload.message, index }
                return { ...state }
            }
            state[index] = { message: JSON.stringify(payload), index }
            return { ...state }
        }
        case "REMOVE ERROR": {
            delete state[payload]
            return { ...state }
        }
        default: {
            return state
        }
    }
}