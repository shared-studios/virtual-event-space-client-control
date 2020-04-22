import moment from 'moment'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAgenda } from '../actions/agenda'

const AgendaControl = () => {
    const [agenda, setAgenda] = useState()
    const agendas = useSelector(state => state.agendas)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAgenda())
    }, [dispatch])

    useEffect(() => {
        const agenda = agendas.find((agenda) => agenda.status === 'current')
        setAgenda(agenda)
    }, [agendas])

    const handleChange = (e) => {
        setAgenda(agendas[e.target.value])
        dispatch({ type: "UPDATE-PUBLISH-AGENDA", payload: agendas[e.target.value] })
    }

    return (
        <div className={styles.agenda}>
            {console.log('AgendaControl')}
            <label className={styles.label}>Agendas: {moment(agenda?.time).format('h:mm a')} {agenda?.title}</label>
            <select className={styles.select} value={agenda?.index} onChange={handleChange}>
                {agendas.map(({ index, title }) => <option key={index} value={index}>{moment(agenda?.time).format('h:mm a')} {title}</option>)}
            </select>
        </div>
    )
}

export default React.memo(AgendaControl)
