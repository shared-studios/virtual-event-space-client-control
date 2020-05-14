import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateCurrentAgenda } from '../actions/agendas'

const AgendaControl = () => {
    const [agenda, setAgenda] = useState()
    const { agendas, loading, current } = useSelector(state => state.agendas)
    const dispatch = useDispatch()

    useEffect(() => setAgenda(), [current])

    return (
        <div className={styles.agenda}>
            {console.log('AgendaControl')}
            <label className={styles.label}>Current Agenda: {agendas[current]?.time} {agendas[current]?.title}</label>
            <select className={styles.select} value={current} onChange={(e) => setAgenda(e.target.value)}>
                {agendas.map(({ id, title, time }) => <option key={id} value={id}>{time} {title}</option>)}
            </select>
            <button
                className={styles.publish_button}
                disabled={!agenda}
                onClick={() => dispatch(updateCurrentAgenda(agenda))}
            >
                Publish{loading && '...'}
            </button>
        </div>
    )
}

export default React.memo(AgendaControl)
