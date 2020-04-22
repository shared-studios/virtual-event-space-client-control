import React from 'react'
import styles from './styles.module.css'
import { sendReaction } from '../actions/current-student'
import { useDispatch } from 'react-redux'
import emojis from '../emojis.json'

const Reaction = ({ studentId }) => {
    const dispatch = useDispatch()

    return (
        <div className={styles.reaction}>
            {emojis.map(({ name, emoji }, i) => {
                return (
                    <button key={i} className={styles.button} onClick={() => dispatch(sendReaction(studentId, name))}>
                        <span role='img' aria-label={name}>{emoji}</span>
                    </button>
                )
            })}
        </div>
    )
}

export default React.memo(Reaction)