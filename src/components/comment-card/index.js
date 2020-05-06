import React from 'react'
import styles from './styles.module.css'
import ApprovedSVG from './approved-svg'
import PendingSVG from './pending-svg'
import moment from 'moment/moment'
import { approveComment } from '../actions/comments'
import { useDispatch } from 'react-redux'
// import { axios } from '../custom-module'

const CommentCard = ({ time_stamp, first_name, last_name, comment, approved }) => {
    const dispatch = useDispatch()

    return (
        <div className={styles.comment} onClick={() => dispatch(approveComment(time_stamp, !approved))}>
            {console.log('CommentCard')}
            <div className={styles.time}>{moment(time_stamp).format('hh:mm A')} {approved ? <ApprovedSVG /> : <PendingSVG />}</div>
            <p className={styles.text}><span className={styles.user_name}>{first_name} {last_name.charAt(0)}.: </span>{comment}</p>
        </div >
    )
}

export default React.memo(CommentCard)