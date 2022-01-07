// Reducer quản lý nhân viên
const initialState = {
    data: [],
    pagination: {
        _page: 1,
        _limit: 10,
        _totalItem: 0,
        q: ""
    }
}
const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_EMPLOYEES":
            state = action.payload
            return {...state}
        case "ADD_EMPLOYEE":
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case "UPDATE_EMPLOYEE":
            const updateEmployees = state.data
            updateEmployees.forEach((employee, index, array) => {
                if (employee.id === action.payload.id) {
                    array[index] = action.payload
                }
            })
            return {
                ...state,
                data: [...updateEmployees]
            }
        case "DELETE_EMPLOYEE":
            const deleteEmployees = state.data.filter(employee => employee.id !== action.payload)
            return {
                ...state,
                data: [...deleteEmployees]
            }
        default:
            return {...state}
    }
}

export default employeesReducer