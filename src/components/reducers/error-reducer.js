
export default (state = null, { type, payload }) => {
    if (type.endsWith("_REJECTED")) {
        type = "ERROR"
    }
    switch (type) {
        case "ERROR": {
            return payload.response.data
        }
        default: {
            return state
        }
    }
}