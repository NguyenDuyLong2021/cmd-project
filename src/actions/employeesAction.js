import employeesApi from '../api/employeesApi'

// Nạp thông tin nhân viên
export const fetchEmployees = (employees) => {
    return {
        type: "FETCH_EMPLOYEES",
        payload: employees
    }
}
export const fetchEmployeesRequest = (params) => {
    return (dispatch) => {
        employeesApi.getAll(params)
            .then(response => {
                dispatch(fetchEmployees(response.data))
            })
            .catch(error => alert(error))
    }
}
//

// Thêm nhân viên
export const addEmployee = (employee) => {
    return {
        type: "ADD_EMPLOYEE",
        payload: employee
    }
}
export const addEmployeeRequest = (employee) => {
    return (dispatch) => {
        employeesApi.add(employee)
            .then(response => {
                dispatch(addEmployee(response.data))
            })
            .catch(error => alert(error))
    }
}
//

// Chỉnh sửa nhân viên
export const updateEmployee = (employee) => {
    return {
        type: "UPDATE_EMPLOYEE",
        payload: employee
    }
}
export const updateEmployeeRequest = (employee) => {
    return (dispatch) => {
        employeesApi.update(employee)
            .then(response => {
                dispatch(updateEmployee(response.data))
            })
            .catch(error => alert(error))
    }
}
//

// Xóa nhân viên
export const deleteEmployee = (id) => {
    return {
        type: "DELETE_EMPLOYEE",
        payload: id
    }
}
export const deleteEmployeeRequest = (id) => {
    return (dispatch) => {
        employeesApi.delete(id)
        .then(() => {
            dispatch(deleteEmployee(id))
        })
        .catch(error => alert(error))
    }
}
//