import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAgendas, updateCurrentAgenda } from '../actions/agendas'

const AgendaControl = () => {
    const [agenda, setAgenda] = useState()
    const { agendas, loading, current } = useSelector(state => state.agendas)
    const [currentAgenda, setCurrentAgenda] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAgendas())
    }, [dispatch])

    useEffect(() => {
        setCurrentAgenda(agendas[current])
    }, [agendas, current])

    const handlePublish = () => {
        dispatch(updateCurrentAgenda(agenda))
        setAgenda()
    }

    return (
        <div className={styles.agenda}>
            {console.log('AgendaControl')}
            <label className={styles.label}>Current Agenda: {currentAgenda?.time} {currentAgenda?.title}</label>
            <select className={styles.select} value={currentAgenda?.index} onChange={(e) => setAgenda(e.target.value)}>
                {agendas.map(({ id, title, time }) => <option key={id} value={id}>{time} {title}</option>)}
            </select>
            <button className={styles.publish_button} onClick={handlePublish} disabled={!agenda}>
                Publish{loading && '...'}
            </button>
        </div>
    )
}

export default React.memo(AgendaControl)
