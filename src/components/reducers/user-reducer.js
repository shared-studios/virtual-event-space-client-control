const user = {
    authenticated: false
}

export default (state = user, { type, payload }) => {
    switch (type) {
        case "FETCH-USER_FULFILLED": {
            console.log("sign in success:", payload.data)
            window.config = { ...window.config, ...payload.data }
            return { ...state, ...payload.data, authenticated: true }
        }
        default: {
            return state
        }
    }
}