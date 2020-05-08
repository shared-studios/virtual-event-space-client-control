import React from 'react'
import styles from './styles.module.css'
import Status from './status-svg'
import moment from 'moment/moment'
import { approveComment } from '../actions/comments'
import { useDispatch } from 'react-redux'
// import { axios } from '../custom-module'

const CommentCard = ({ time_stamp, first_name, last_name, comment, status }) => {
    const dispatch = useDispatch()
    return (
        <div
            className={styles.comment} >
            {console.log('CommentCard')}
            <div className={styles.time}>{moment(time_stamp).format('hh:mm A')} <Status status={status} /></div>
            <p className={styles.text}><span className={styles.user_name}>{first_name} {last_name.charAt(0)}.: </span>{comment}</p>
            <button
                className={`${styles.button} ${styles.approve}`}
                disabled={status === 'approved'}
                onClick={() => dispatch(approveComment(time_stamp, 'approved'))}>
                Approve
            </button>
            <button
                className={`${styles.button} ${styles.reject}`}
                disabled={status === 'rejected'}
                onClick={() => dispatch(approveComment(time_stamp, 'rejected'))}>
                Reject
            </button>
        </div >
    )
}

export default React.memo(CommentCard)