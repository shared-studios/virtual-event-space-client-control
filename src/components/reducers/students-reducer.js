export default (state = [], { type, payload }) => {
    switch (type) {
        case "FETCH-STUDENTS_FULFILLED": {
            return [...payload.data]
        }
        case "UPDATE-CURRENT-STUDENT": {
            const students = state.map((student) => {
                if (student.student_id === payload.student_id) {
                    return { ...student, status: 'current' }
                }
                delete student.status
                return student
            })
            return [...students]
        }
        default: {
            return state
        }
    }
}