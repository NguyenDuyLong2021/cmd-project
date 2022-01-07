// Reducer quản lý vai trò
const initialState = {
    data: [],
    pagination: {
        _page: 1,
        _limit: 10,
        _totalItem: 0
    }
}
const rolesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ROLES":
            state = action.payload
            return {...state}
        case "ADD_ROLE":
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case "UPDATE_ROLE":
            const updateRoles = state.data
            updateRoles.forEach((role, index, array) => {
                if (role.id === action.payload.id) {
                    array[index] = action.payload
                }
            })
            return {
                ...state,
                data: [...updateRoles]
            }
        case "DELETE_ROLE":
            const deleteRoles = state.data.filter(role => role.id !== action.payload)
            return {
                ...state,
                data: [...deleteRoles]
            }
        default:
            return {...state}
    }
}

export default rolesReducer