export const onConnect = (socket) => {
    console.log('onConnect:', socket)
    return (dispatch) => dispatch({ type: 'SOCKET-CONNECTED', payload: socket })
}

export const onError = (e) => {
    console.log('onError:', e)
    return (dispatch) => dispatch({ type: 'ERROR', payload: "Network error" })
}

export const onMessage = (e) => {
    console.log('onMessage:', e)
    return (dispatch) => {
        const { data, action } = JSON.parse(e.data)
        if (action === 'comment') dispatch({ type: 'NEW_COMMENT', payload: data })
    }
}