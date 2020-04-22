
export default (state = null, { type, payload }) => {
    switch (type) {
        case "CREATE-SOCKET": {
            return payload
        }
        default: {
            return state
        }
    }
}