import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { updateCurrentAgenda } from '../actions/agendas'

const AgendaControl = () => {
    const { list, loading, current } = useSelector(state => state.agendas)
    const [agenda, setAgenda] = useState(current)
    const dispatch = useDispatch()

    useEffect(() => setAgenda(current), [current])

    return (
        <div className={styles.agenda}>
            {console.log('AgendaControl')}
            <label className={styles.label}>Current Agenda: {list[current]?.title}</label>
            <select
                className={styles.select}
                value={agenda}
                onChange={(e) => setAgenda(e.target.value)}>
                {list.map(({ id, title }) => <option key={id} value={id}>{title}</option>)}
            </select>
            <button
                className={styles.publish_button}
                disabled={agenda === current}
                onClick={() => dispatch(updateCurrentAgenda(agenda))}>
                Publish{loading && '...'}
            </button>
        </div>
    )
}

export default React.memo(AgendaControl)
