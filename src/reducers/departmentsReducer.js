// Reducer quản lý phòng ban

const departmentsReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_DEPARTMENTS":
            state = action.payload
            return [...state]
        case "ADD_DEPARTMENT":
            state.push(action.payload)
            return [...state]
        case "UPDATE_DEPARTMENT":
            state.forEach((department, index, array) => {
                if (department.id === action.payload.id) {
                    array[index] = action.payload
                }
            })
            return [...state]
        case "DELETE_DEPARTMENT":
            state = state.filter(department => department.id !== action.payload)
            return [...state]
        default:
            return [...state]
    }
}

export default departmentsReducer