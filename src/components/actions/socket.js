export const createSocket = (socket) => {
    return (dispatch) => {
        dispatch({ type: 'CREATE-SOCKET', payload: socket })
    }
}