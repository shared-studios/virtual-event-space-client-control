import React from 'react'
import styles from './styles.module.css'
import logo from './logo.png'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()

    return (
        <div className={styles.header}>
            <img className={styles.logo_image} alt='logo' src={logo} />
            <nav className={styles.nav}>
                <button
                    className={styles.link}
                    onClick={() => dispatch({ type: 'SWITCH-TAB', payload: 'control' })}>
                    Control
                </button>
                <button
                    className={styles.link}
                    onClick={() => dispatch({ type: 'SWITCH-TAB', payload: 'approver' })}>
                    Comments
                </button>
            </nav>
        </div>
    )
}

export default Header
