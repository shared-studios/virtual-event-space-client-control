import React from 'react'
import styles from './styles.module.css'

const Message = ({ msg, name }) => {
    const { message, user_name } = msg

    return (
        <div className={name === user_name ? styles.message_me : styles.message} >
            {name !== user_name && <div className={styles.avatar}>{user_name.charAt(0).toUpperCase()}</div>}
            <div className={name === user_name ? styles.text_me : styles.text}>
                {message}
                {console.log('message')}
            </div>
            {name !== user_name && <div className={styles.user_name}>{user_name}</div>}
        </div >
    )
}

export default React.memo(Message)