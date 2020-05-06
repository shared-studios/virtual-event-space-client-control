import React from 'react'
import styles from './styles.module.css'
import Socket from '../socket'
import CommentsList from '../comments-list'
import EventInfo from '../event-info'

const ApproveComment = () => {
    return (
        <div className={styles.approver_page}>
            {console.log('ApproveComment')}
            <Socket>
                <EventInfo />
                <CommentsList />
            </Socket>
        </div>
    )
}

export default React.memo(ApproveComment)
