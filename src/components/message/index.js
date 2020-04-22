import React, { useState } from 'react'
import styles from './styles.module.css'
import { axios } from '../custom-module'

const ApproveMessage = ({ msg }) => {
    const { message, user_name, time_stamp } = msg
    const [approved, setApproved] = useState(msg.approved)

    const handleChange = (approved) => {
        axios.patch(`message/${time_stamp}/${approved}`)
            .then(() => {
                setApproved(approved)
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className={styles.message} >
            {console.log('message')}
            <input
                className={styles.approved}
                type="checkbox"
                checked={approved}
                onChange={(e) => handleChange(e.target.checked)}
            />
            <div className={styles.text}>{message}</div>
            <div className={styles.user_name}>{user_name}</div>
        </div >
    )
}

export default React.memo(ApproveMessage)