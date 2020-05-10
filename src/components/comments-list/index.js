import React, { useEffect } from 'react'
import styles from './styles.module.css'
import Comment from '../comment-card'
import { fetchComments } from '../actions/comments'
import { useDispatch, useSelector } from 'react-redux'

const CommentsList = () => {
    const dispatch = useDispatch()
    const comments = useSelector(state => Object.values(state.comments).reverse())

    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])

    return (
        <div className={styles.comments}>
            <h4>Comments:</h4>
            {console.log('comments')}
            {comments.length > 0 ? comments.map((comment, i) => <Comment key={i} {...comment} />) : 'no comments'}
        </div >
    )
}

export default React.memo(CommentsList)