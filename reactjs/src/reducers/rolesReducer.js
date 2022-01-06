// Reducer quản lý vai trò

const rolesReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCH_ROLES":
            state = action.payload
            return [...state]
        case "ADD_ROLE":
            state.push(action.payload)
            return [...state]
        case "UPDATE_ROLE":
            state.forEach((role, index, array) => {
                if (role.id === action.payload.id) {
                    array[index] = action.payload
                }
            })
            return [...state]
        case "DELETE_ROLE":
            state = state.filter(role => role.id !== action.payload)
            return [...state]
        default:
            return [...state]
    }
}

export default rolesReducer