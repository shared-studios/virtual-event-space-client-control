import React, { useEffect } from 'react';
import styles from './styles.module.css'
import Loading from '../loading'
import { Route } from "react-router-dom"
import { authorizeUser } from '../actions/authorize'
import { useDispatch, useSelector } from "react-redux"

const Authentication = ({ component: Component, ...rest }) => {
    const { event_id, user_id } = rest.computedMatch.params
    const dispatch = useDispatch()
    const { authenticated, loading, message, type } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(authorizeUser(event_id, user_id))
    }, [dispatch, event_id, user_id])

    return <Route {...rest} render={props => {
        console.log('Authentication')
        if (loading) {
            return <Loading />
        } else if (authenticated && type === 'comment-approver') {
            return <Component {...props} />
        } else if (type !== 'comment-approver') {
            return <p className={styles.message}>you are not authorized.</p>
        } else if (message) {
            return <p className={styles.message}>{message}</p>
        } else {
            return <p className={styles.message}>an unknown error occurred.</p>
        }
    }} />
};

export default React.memo(Authentication)

// const Authentication = (props) => {

//     const { eventId, userId } = props
//     const dispatch = useDispatch()
//     const { authenticated, loading, message } = useSelector(state => state.user)

//     useEffect(() => {
//     dispatch(authorizeUser(eventId, userId))
//     console.log('Authentication')
//     return () => dispatch({ type: "UNAUTHORIZED" })
//     }, [dispatch, eventId, userId])
//     // return <>{console.log(props)}</>
//     return <>{loading ? <Loading /> : authenticated ? props.children : <p className={styles.message}>{message}</p>}</>
// }

