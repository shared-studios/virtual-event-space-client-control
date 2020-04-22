import React from 'react';
import styles from './styles.module.css'
import logo from './logo.png'

const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} alt='logo' src={logo} />
            <p className={styles.title}>CONVOCATION, DEGREE, AND CONFERRAL CEREMONY</p>
        </div>
    )
}

export default React.memo(Header)
