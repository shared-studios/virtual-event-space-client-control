import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'
import Comment from '../comment-card'
import { fetchMessages, newApproveMessage } from '../actions/comments'
import { useDispatch, useSelector } from 'react-redux'

const CommentsList = () => {
    const messageList = useRef()
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments)
    const socket = useSelector(state => state.socket)

    useEffect(() => {
        dispatch(fetchMessages())
        socket.on('message', (data) => {
            dispatch(newApproveMessage(data))
        })
    }, [dispatch, socket])

    useEffect(() => {
        messageList.current.scrollTop = messageList.current.scrollHeight
    }, [comments])

    return (
        <div className={styles.messages} ref={messageList}>
            {console.log('comments')}
            {comments.map((message, i) => <Comment key={i} msg={message} />)}
        </div >
    )
}

export default React.memo(CommentsList)