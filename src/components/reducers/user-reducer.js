export default (state = { authenticated: false, loading: false }, { type, payload }) => {
    switch (type) {
        case "FETCH-USER_FULFILLED": {
            console.log("sign in success:", payload)
            window.config = { ...window.config, ...payload }
            return { ...state, ...payload, authenticated: true, loading: false }
        }
        case "AUTHENTICATING": {
            return { ...state, loading: true }
        } case "AUTHENTICATING_FAILED": {
            return { ...state, loading: false }
        }
        default: return state
    }
}