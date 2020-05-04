export default (state = { authenticated: false, loading: true }, { type, payload }) => {
    switch (type) {
        case "FETCH-USER_FULFILLED": {
            console.log("sign in success:", payload)
            window.config = { ...window.config, ...payload }
            return { ...state, ...payload, authenticated: true, loading: false }
        }
        default: {
            return state
        }
    }
}