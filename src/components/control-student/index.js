import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStudents } from '../actions/student'

const StudentControl = () => {
    const [student, setStudent] = useState()
    const students = useSelector(state => state.students)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStudents())
    }, [dispatch])

    useEffect(() => {
        const student = students.find((student) => student.status === 'current')
        setStudent(student)
    }, [students])

    const handleChange = (e) => {
        setStudent(students[e.target.value])
        if (e.target.value) {
            dispatch({ type: "UPDATE-PUBLISH-STUDENT", payload: students[e.target.value] })
        } else {
            dispatch({ type: "UPDATE-PUBLISH-STUDENT", payload: {} })
        }
    }

    return (
        <div className={styles.student}>
            {console.log('StudentControl')}
            <label className={styles.label}>Students: {student?.index} {student?.name}</label>
            <select className={styles.select} value={student?.index} onChange={handleChange}>
                <option value=''>Select Student...</option>
                {students.map(({ index, name }) => <option key={index} value={index}>{index} {name}</option>)}
            </select>
        </div>
    )
}

export default React.memo(StudentControl)
