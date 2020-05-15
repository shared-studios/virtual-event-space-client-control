export default (state = {
    video_offset: { current_video: null, list: [] },
    loading: false,
    custom_loading: false,
    current_video_loading: false
}, { type, payload }) => {
    switch (type) {
        case "FETCH-EVENT_FULFILLED": {
            return Object.assign({}, state, payload)
        }
        case "UPDATE-CURRENT-VIDEO-ID_FULFILLED": {
            return Object.assign({}, state, {
                current_video_loading: false,
                video_offset: Object.assign({}, state.video_offset, {
                    current_video: payload.data
                })
            })
        }
        case 'UPDATE-VIDEO-OFFSET-DURATION_FULFILLED': {
            return updateVideoOffsetDuration(state, payload, 'loading')
        }
        case 'UPDATE-VIDEO-OFFSET-DURATION-CUSTOM_FULFILLED': {
            return updateVideoOffsetDuration(state, payload, 'custom_loading')
        }
        case 'UPDATE-VIDEO-OFFSET-DURATION_PENDING': return pending(state, 'loading')
        case 'UPDATE-VIDEO-OFFSET-DURATION_REJECTED': return pending(state, 'loading')
        case "UPDATE-CURRENT-VIDEO-ID_PENDING": return pending(state, 'current_video_loading')
        case "UPDATE-CURRENT-VIDEO-ID_REJECTED": return pending(state, 'current_video_loading')
        case 'UPDATE-VIDEO-OFFSET-DURATION-CUSTOM_PENDING': return pending(state, 'custom_loading')
        case 'UPDATE-VIDEO-OFFSET-DURATION-CUSTOM_REJECTED': return pending(state, 'custom_loading')
        default: {
            return state
        }
    }
}

const pending = (state, type) => Object.assign({}, state, { [type]: true })

const updateVideoOffsetDuration = (state, payload, type) => {
    const { id, offset_duration } = payload.data
    return Object.assign({}, state, {
        [type]: false,
        video_offset: Object.assign({}, state.video_offset, {
            list: state.video_offset.list.map((video) => {
                if (video.id === id) {
                    return { ...video, offset_duration }
                } else {
                    return video
                }
            })
        })
    })
}