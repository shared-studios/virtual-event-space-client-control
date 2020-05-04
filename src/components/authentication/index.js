import React, { useEffect } from 'react';
import Loading from '../loading'
import { authorizeUser } from '../actions/authorize'
import { useDispatch, useSelector } from "react-redux"

const Authentication = (props) => {
    const { eventId, userId } = props
    const dispatch = useDispatch()
    const { authenticated, loading } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(authorizeUser(eventId, userId))
        console.log('Authentication')
    }, [dispatch, eventId, userId])

    return <>{loading ? <Loading /> : authenticated && props.children}</>
}

export default React.memo(Authentication)
