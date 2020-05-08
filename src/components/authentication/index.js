import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'
import Loading from '../loading'
import { Route } from "react-router-dom"
import { authorizeUser } from '../actions/authorize'
import { useDispatch, useSelector } from "react-redux"

const Authentication = ({ component: Component, ...rest }) => {
    const [password, setPassword] = useState('masudalam')
    const { event_id, user_id } = rest.computedMatch.params
    const { authenticated, loading, message } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authorizeUser(event_id, user_id, password))
    }, [dispatch, event_id, user_id, password])

    const handleLogin = () => {
        dispatch({ type: 'AUTHENTICATING' })
        dispatch(authorizeUser(event_id, user_id, password))
    }

    return <Route {...rest} render={props => {
        console.log('Authentication')
        if (!authenticated) {
            return <div className={styles.authorize}>
                <span>
                    <input className={styles.password} type='text' placeholder='Please enter your password' value={password}
                        onChange={({ target }) => setPassword(target.value)} /><br />
                    <button
                        className={styles.login_button}
                        onClick={handleLogin}
                        disabled={!password}>
                        Login{loading && '...'}
                    </button>
                </span>
            </div >
        } else if (loading) {
            return <Loading />
        } else if (authenticated) {
            return <Component {...props} />
        } else if (message) {
            return <div className={styles.authorize}><p className={styles.message}>{message}</p></div>
        } else {
            return <div className={styles.authorize}><p className={styles.message}>an unknown error occurred.</p></div>
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

