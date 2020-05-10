
export default (state = {}, { type, payload }) => {
    switch (type) {
        case "FETCH-COMMENTS_FULFILLED": {
            payload.data.forEach(comment => {
                const { time_stamp } = comment
                state[time_stamp] = comment
            })
            return { ...state }
        } case "APPROVE-COMMENT_FULFILLED": {
            const { time_stamp } = payload.data
            state[time_stamp] = payload.data
            return { ...state }
        }
        case 'UPDATE-COMMENT': {
            const { time_stamp } = payload
            state[time_stamp] = payload
            return { ...state }
        }
        default: {
            return state
        }
    }
}