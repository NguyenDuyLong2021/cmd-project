// Reducer quản lý nhân viên

const employeesReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_EMPLOYEES":
            state = action.payload
            return [...state]
        case "ADD_EMPLOYEE":
            state.push(action.payload)
            return [...state]
        case "UPDATE_EMPLOYEE":
            state.forEach((employee, index, array) => {
                if (employee.id === action.payload.id) {
                    array[index] = action.payload
                }
            })
            return [...state]
        case "DELETE_EMPLOYEE":
            state = state.filter(employee => employee.id !== action.payload)
            return [...state]
        default:
            return [...state]
    }
}

export default employeesReducer