import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.css'
import Message from '../message'
import send from '../svg/send.svg'
import { fetchMessages, postMessage, newMessage } from '../actions/message'

const Chat = () => {
    const [showChat, toggleChat] = useState(false)
    const chatInput = useRef()
    const messageList = useRef()
    const dispatch = useDispatch()
    const { f_name, l_name } = useSelector(state => state.user)
    const messages = useSelector(state => state.messages)
    const socket = useSelector(state => state.socket)

    useEffect(() => {
        dispatch(fetchMessages())
        const onEnter = (e) => {
            if (e.keyCode === 13) {
                if (chatInput.current.value) {
                    dispatch(postMessage(chatInput.current.value))
                    chatInput.current.value = ''
                }
                chatInput.current.focus()
            }
        }
        socket.on('message', (data) => {
            dispatch(newMessage(data))
        })

        chatInput.current.addEventListener("keyup", onEnter)
    }, [dispatch, socket])

    const handleSendMessage = () => {
        if (chatInput.current.value) {
            dispatch(postMessage(chatInput.current.value))
            chatInput.current.value = ''
        }
        chatInput.current.focus()
    }

    useEffect(() => {
        messageList.current.scrollTop = messageList.current.scrollHeight
    }, [messages])

    return (
        <div className={styles.chat}>
            {console.log('messagesssss')}
            <div className={`${styles.body} ${showChat ? styles.show : styles.hide}`} ref={messageList}>
                {messages.map((message, i) => {
                    return <Message key={i} msg={message} name={`${f_name} ${l_name}`} />
                })}
                <div className={styles.message_box}>
                    <input
                        ref={chatInput}
                        className={styles.input}
                        placeholder="Type message here..."
                    />
                    <img alt='' src={send} className={styles.icon} onClick={handleSendMessage} />
                </div>
            </div>
            <button className={styles.chat_button} onClick={() => toggleChat((privState) => !privState)}>
                {showChat ? <svg className={styles.chat_icon} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
                </svg> : < svg className={styles.chat_icon} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" />
                    </svg>}
            </button>
        </div >
    )
}

export default React.memo(Chat)