export default (state = { video_offset: [], loading: false, custom_loading: false }, { type, payload }) => {
    switch (type) {
        case "FETCH-EVENT_FULFILLED": {
            return { ...state, ...payload }
        }
        case 'UPDATE-VIDEO-OFFSET_FULFILLED': {
            const { id, duration } = payload.data
            state.video_offset = state.video_offset.map((video) => {
                if (video.id === id) return { ...video, duration }
                return video
            })
            return { ...state, loading: false }
        }
        case 'UPDATE-VIDEO-OFFSET-CUSTOM_FULFILLED': {
            const { id, duration } = payload.data
            state.video_offset = state.video_offset.map((video) => {
                if (video.id === id) return { ...video, duration }
                return video
            })
            return { ...state, custom_loading: false }
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