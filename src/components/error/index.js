import React, { useEffect } from 'react';
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useTransition, animated } from 'react-spring'
import Close from './close'

const Error = () => {
    const errors = useSelector(state => Object.values(state.errors))
    const transitions = useTransition(errors, item => item.index, {
        from: { opacity: 0, transform: "translateX(-100%)" },
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
    })

    return (
        <div className={styles.errors}>
            {transitions.map(({ item, key, props }) => {
                return item && <animated.div key={key} style={props} className={styles.error}>
                    <ErrorNotification {...item} />
                </animated.div>
            })}
        </div>
    )
}

export default React.memo(Error)


const ErrorNotification = ({ message, index }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        let timeOut = null
        clearTimeout(timeOut)
        timeOut = setTimeout(() => dispatch({ type: "REMOVE ERROR", payload: index }), 5000)
        return () => clearTimeout(timeOut)
    }, [dispatch, index])

    return (
        < >
            {message}
            <button
                className={styles.close}
                onClick={() => dispatch({ type: "REMOVE ERROR", payload: index })}>
                <Close />
            </button>
        </>
    )
}