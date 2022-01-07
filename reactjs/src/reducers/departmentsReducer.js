// Reducer quản lý phòng ban
const initialState = {
    data: [],
    pagination: {
        _page: 0,
        _limit: 0,
        _totalItem: 0
    }
}
const departmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DEPARTMENTS":
            state = action.payload
            return {...state}
        case "ADD_DEPARTMENT":
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case "UPDATE_DEPARTMENT":
            const updateDepartments = state.data
            updateDepartments.forEach((department, index, array) => {
                if (department.id === action.payload.id) {
                    array[index] = action.payload
                }
            })
            return {
                ...state,
                data: [...updateDepartments]
            }
        case "DELETE_DEPARTMENT":
            const deleteDepartments = state.data.filter(department => department.id !== action.payload)
            return {
                ...state,
                data: [...deleteDepartments]
            }
        default:
            return {...state}
    }
}

export default departmentsReducer