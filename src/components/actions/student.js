import { axios } from '../custom-module'

export const fetchStudents = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-STUDENTS', payload: axios.get('student') })
    }
}
