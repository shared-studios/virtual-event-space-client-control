import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { onMessage, onError, onConnect } from '../actions/socket'

const Socket = (props) => {
    const dispatch = useDispatch()
    const { connected } = useSelector(state => state.socket)

    useEffect(() => {
        let socket
        const onClose = (e) => {
            if (e) console.log('close', e)
            if (e?.code !== 3500) {
                const url = `${window.config.socket_url}?authorization=${window.config.token}`
                socket = new WebSocket(url)
                socket.addEventListener('close', onClose)
                socket.addEventListener('error', (e) => dispatch(onError(e)))
                socket.addEventListener('message', (e) => dispatch(onMessage(e)))
                socket.addEventListener('open', (e) => dispatch(onConnect(socket, e)))
            }
        }
        onClose()
        return () => socket.close(3500)
    }, [dispatch])

    return (
        <>
            {console.log('Socket')}
            {connected && props.children}
        </>
    )
}

export default React.memo(Socket)
