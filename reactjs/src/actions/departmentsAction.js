import departmentsApi from "../api/departmentsApi"

// Nạp thông tin phòng ban
export const fetchDepartments = (data) => {
    return {
        type: "FETCH_DEPARTMENTS",
        payload: data
    }
}
export const fetchDepartmentsRequest = (params) => {
    return (dispatch) => {
        departmentsApi.getAll(params)
            .then(response => {
                dispatch(fetchDepartments(response.data))
            })
            .catch(error => alert(error))
    }
}
//

// Thêm phòng ban
export const addDepartment = (department) => {
    return {
        type: "ADD_DEPARTMENT",
        payload: department
    }
}
export const addDepartmentRequest = (department) => {
    return (dispatch) => {
        departmentsApi.add(department)
            .then(response => {
                dispatch(addDepartment(response.data))
            })
            .catch(error => alert(error))
    }
}
//

// Chỉnh sửa phòng ban
export const updateDepartment = (department) => {
    return {
        type: "UPDATE_DEPARTMENT",
        payload: department
    }
}
export const updateDepartmentRequest = (department) => {
    return (dispatch) => {
        departmentsApi.update(department)
            .then(response => {
                dispatch(updateDepartment(response.data))
            })
            .catch(error => alert(error))
    }
}
//

// Xóa phòng ban
export const deleteDepartment = (id) => {
    return {
        type: "DELETE_DEPARTMENT",
        payload: id
    }
}
export const deleteDepartmentRequest = (id) => {
    return (dispatch) => {
        departmentsApi.delete(id)
        .then(() => {
            dispatch(deleteDepartment(id))
        })
        .catch(error => alert(error))
    }
}
//