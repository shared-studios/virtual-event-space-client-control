import React from 'react'
import styles from './styles.module.css'
import Authentication from '../authentication'
import AgendaControl from '../control-agenda'
import StudentControl from '../control-student'
import { useSelector, useDispatch } from 'react-redux'
import { publishAll } from '../actions/publish'
import logo from './Logo.png'
const ControlPage = (props) => {
    const { event_id, user_id } = props.match.params
    const { agenda, student, disabled, loading } = useSelector(state => state.publish)
    const dispatch = useDispatch()

    return (
        <Authentication eventId={event_id} userId={user_id}>
            {console.log('ControlPage')}
            <div className={styles.logo}>
                <img className={styles.logo_image} alt='logo' src={logo} />
            </div>
            <div className={styles.control_page}>
                <AgendaControl />
                <StudentControl />
                <button
                    className={`${styles.publish_button} ${agenda || student ? styles.publish_button_active : styles.publish_button_inactive}`}
                    onClick={() => dispatch(publishAll({ agenda, student }))}
                    disabled={disabled}
                >
                    Publish{loading && '...'}
                </button>
            </div>
        </Authentication>
    )
}

export default React.memo(ControlPage)
