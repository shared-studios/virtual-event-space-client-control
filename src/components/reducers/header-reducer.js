export default (state = "control", { type, payload }) => {
    switch (type) {
        case "SWITCH-TAB": {
            return payload
        }
        default: {
            return state
        }
    }
}