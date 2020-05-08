import React from 'react'
import styles from './styles.module.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

const Header = () => {
    const { pathname } = useLocation()
    return (
        <div className={styles.header}>
            <img className={styles.logo_image} alt='logo' src={logo} />
            <nav className={styles.nav}>
                <Link className={styles.link} to={`/control/${pathname.split('/')[2]}/${pathname.split('/')[3]}`}>Control</Link>
                <Link className={styles.link} to={`/approver/${pathname.split('/')[2]}/${pathname.split('/')[3]}`}>Comments</Link>
            </nav>
        </div>
    )
}

export default Header
