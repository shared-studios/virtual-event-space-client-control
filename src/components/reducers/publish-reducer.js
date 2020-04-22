
export default (state = { loading: false, disabled: true }, { type, payload }) => {
    switch (type) {
        case "PUBLISH_PENDING": {
            return { ...state, loading: true, disabled: true }
        }
        case "PUBLISH_FULFILLED": {
            return { loading: false, disabled: true }
        }
        case "UPDATE-PUBLISH-AGENDA": {
            return { ...state, agenda: { index: payload.index }, disabled: false }
        }
        case "UPDATE-PUBLISH-STUDENT": {
            return { ...state, student: payload, disabled: false }
        }
        default: {
            return state
        }
    }
}