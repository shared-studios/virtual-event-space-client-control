import React from 'react'
import Authentication from '../authentication'
import Socket from '../socket'
import { useSelector } from 'react-redux'
import CommentsList from '../comments-list'

const ApproveMessage = (props) => {
    const { event_id, user_id } = props.match.params
    const user = useSelector(state => state.user)

    return (
        <Authentication eventId={event_id} userId={user_id}>
            <Socket>
                {console.log('ApproveMessage')}
                {user.type === 'message-approver' && <CommentsList />}
            </Socket>
        </Authentication>
    )
}

export default React.memo(ApproveMessage)
