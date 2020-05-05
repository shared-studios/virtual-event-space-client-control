export default (state = { video_offset: {}, loading: false, custom_loading: false }, { type, payload }) => {
    switch (type) {
        case "FETCH-EVENT_FULFILLED": {
            return { ...state, ...payload }
        }
        case 'UPDATE-VIDEO-OFFSET_FULFILLED': {
            return { ...state, video_offset: { ...state.video_offset, ...payload.data }, loading: false }
        }
        case 'UPDATE-VIDEO-OFFSET-CUSTOM_FULFILLED': {
            return { ...state, video_offset: { ...state.video_offset, ...payload.data }, custom_loading: false }
        }
        case 'UPDATE-VIDEO-OFFSET_PENDING': {
            return { ...state, loading: true }
        }
        case 'UPDATE-VIDEO-OFFSET-CUSTOM_PENDING': {
            return { ...state, custom_loading: true }
        }
        default: {
            return state
        }
    }
}