import React from 'react';
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useTransition, animated } from 'react-spring'
import Close from './close'

const Error = () => {
    const dispatch = useDispatch()
    const errors = useSelector(state => Object.values(state.errors))
    const transitions = useTransition(errors, item => item.index, {
        from: { opacity: 0, transform: "translateX(-100%)" },
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
    })

    return (
        <div className={styles.errors}>
            {transitions.map(({ item: { message, index }, key, props }) => {
                return message && <animated.div key={key} style={props} className={styles.error} >
                    {message}
                    <button
                        className={styles.close}
                        onClick={() => dispatch({ type: "REMOVE ERROR", payload: index })}
                    >
                        <Close />
                    </button>
                </animated.div>
            })}
        </div>
    )
}

export default React.memo(Error)
