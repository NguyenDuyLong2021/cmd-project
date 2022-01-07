// Reducer quản lý đề xuất
const initialState = {
    data: [],
    pagination: {
        _page: 0,
        _limit: 0,
        _totalItem: 0
    }
}
const requestsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_REQUESTS":
            state = action.payload
            return {...state}
        case "ADD_REQUEST":
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case "UPDATE_REQUEST":
            const updateRequests = state.data
            updateRequests.forEach((request, index, array) => {
                if (request.id === action.payload.id) {
                    array[index] = action.payload
                }
            })
            return {
                ...state,
                data: [...updateRequests]
            }
        case "DELETE_REQUEST":
            const deleteRequests = state.data.filter(request => request.id !== action.payload)
            return {
                ...state,
                data: [...deleteRequests]
            }
        default:
            return {...state}
    }
}

export default requestsReducer