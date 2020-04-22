import React from 'react'
import styles from './styles.module.css'
import Authentication from '../authentication'
import Socket from '../socket'
import { useSelector } from 'react-redux'
import ApproveMessages from '../approve-messages'

const ApproveMessage = (props) => {
    const { event_id, user_id } = props.match.params
    const user = useSelector(state => state.user)

    return (
        <Authentication eventId={event_id} userId={user_id}>
            <Socket>
                {console.log('ApproveMessage')}
                {user.type === 'message-approver' && <div className={styles.message_approve_page}>
                    <ApproveMessages />
                </div>}
            </Socket>
        </Authentication>
    )
}

export default React.memo(ApproveMessage)
