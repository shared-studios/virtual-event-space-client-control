import React, { useEffect } from 'react';
import { fetchUser } from '../actions/user'
import { useDispatch, useSelector } from "react-redux"

const Authentication = (props) => {
    const { eventId, userId } = props
    const dispatch = useDispatch()
    const { authenticated } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(fetchUser(eventId, userId))
        console.log('Authentication:dfsdfs')
    }, [dispatch, eventId, userId])

    return (
        <React.Fragment>
            {console.log('Authentication')}
            {authenticated && props.children}
        </React.Fragment>
    )
}

export default React.memo(Authentication)
