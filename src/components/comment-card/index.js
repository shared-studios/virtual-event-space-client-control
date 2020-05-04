import React, { useState } from 'react'
import styles from './styles.module.css'
import { axios } from '../custom-module'

const CommentCard = ({ msg }) => {
    const { message, user_name, time_stamp } = msg
    const [approved, setApproved] = useState(msg.approved)

    const handleChange = () => {
        axios.patch(`message/${time_stamp}/${!approved}`)
            .then(() => {
                setApproved(!approved)
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className={styles.message} >
            {console.log('message')}
            <div className={`${styles.text} ${styles[`${approved ? 'approved' : 'denied'}`]}`} onClick={handleChange}>{message}</div>
            <div className={styles.user_name}>{user_name}</div>
        </div >
    )
}

export default React.memo(CommentCard)