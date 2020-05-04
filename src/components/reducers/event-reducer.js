export default (state = { video_offset: {}, loading: false }, { type, payload }) => {
    switch (type) {
        case "FETCH-EVENT_FULFILLED": {
            return { ...state, ...payload }
        }
        case 'UPDATE-VIDEO_FULFILLED': {
            return { ...state, video_offset: { ...state.video_offset, ...payload.data } }
        }
        case 'UPDATE-VIDEO-OFFSET_PENDING': {
            return { ...state, loading: true }
        }
        default: {
            return state
        }
    }
}