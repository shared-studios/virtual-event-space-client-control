import { axios } from '../custom-module'

export const fetchCurrentStudent = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH-CURRENT-STUDENT', payload: axios.get('student/current') })
    }
}

export const updateReaction = (reaction) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE-REACTION', payload: reaction })
    }
}

export const sendReaction = (student_id, emoji) => {
    return (dispatch) => {
        dispatch({ type: 'STUDENT-REACTION', payload: axios.patch(`student/reaction/${student_id}/jddj`) })
    }
}