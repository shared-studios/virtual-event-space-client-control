
export default (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH-COMMENTS_FULFILLED": {
            return payload.data
        } case "APPROVE-COMMENT_FULFILLED": {
            const { time_stamp, status } = payload.data
            state = state.map((comment) => {
                if (comment.time_stamp === time_stamp) {
                    return { ...comment, status }
                }
                return comment
            })
            return [...state]
        }
        case 'NEW_COMMENT': {
            return [payload, ...state]
        }
        default: {
            return state
        }
    }
}