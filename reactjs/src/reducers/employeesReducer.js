import * as actions from "../constants/ActionEmployee"

// Khởi tạo state
const initialState = {
    data: [],
    pagination: {
        _page: 1,
        _limit: 10,
        _totalItem: 0
    }
}

// Reducer quản lý danh sách nhân viên
const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        // Lấy danh sách nhân viên
        case actions.FETCH_EMPLOYEES: {
            state = action.payload
            return { ...state }
        }

        // Thêm nhân viên
        case actions.ADD_EMPLOYEE: {
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        }

        // Cập nhật thông tin nhân viên
        case actions.UPDATE_EMPLOYEE: {
            const listEmployeesUpdated = state.data
            listEmployeesUpdated.forEach((employee, index, array) => {
                if (employee.id === action.payload.id) {
                    array[index] = action.payload
                }
            })
            return {
                ...state,
                data: [...listEmployeesUpdated]
            }
        }

        // Xóa nhân viên
        case actions.DELETE_EMPLOYEE: {
            const listEmployeesDeleted = state.data.filter(employee => employee.id !== action.payload)
            return {
                ...state,
                data: [...listEmployeesDeleted]
            }
        }
        default:
            return { ...state }
    }
}

export default employeesReducer