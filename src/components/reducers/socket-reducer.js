
export default (state = { connected: false }, { type, payload }) => {
    switch (type) {
        case "SOCKET-CONNECTED": {
            return { connected: true }
        }
        default: {
            return state
        }
    }
}