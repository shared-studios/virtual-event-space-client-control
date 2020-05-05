import React from 'react'
import styles from './styles.module.css'
import logo from './logo.png'

const Header = () => {

    return (
        <div className={styles.header}>
            <img className={styles.logo_image} alt='logo' src={logo} />
        </div>
    )
}

export default Header
