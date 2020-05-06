import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAgendas, updateCurrentAgenda } from '../actions/agendas'

const AgendaControl = () => {
    const [agenda, setAgenda] = useState()
    const [currentAgenda, setCurrentAgenda] = useState()
    const { agendas, loading } = useSelector(state => state.agendas)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAgendas())
    }, [dispatch])

    useEffect(() => {
        const agenda = agendas.find((agenda) => agenda.status === 'current')
        setCurrentAgenda(agenda)
    }, [agendas])

    const handleChange = (e) => {
        setAgenda(e.target.value)
    }

    const handlePublish = () => {
        dispatch(updateCurrentAgenda(agenda))
        setAgenda()
    }

    return (
        <div className={styles.agenda}>
            {console.log('AgendaControl')}
            <label className={styles.label}>Agendas: {currentAgenda?.time} {currentAgenda?.title}</label>
            <select className={styles.select} value={currentAgenda?.index} onChange={handleChange}>
                {agendas.map(({ id, title, time }) => <option key={id} value={id}>{time} {title}</option>)}
            </select>
            <button className={styles.publish_button} onClick={handlePublish} disabled={!agenda}>
                Publish{loading && '...'}
            </button>
        </div>
    )
}

export default React.memo(AgendaControl)