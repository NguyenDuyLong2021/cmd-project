import departmentsApi from "../api/departmentsApi"

// Nạp thông tin phòng ban
export const fetchDepartments = (departments) => {
    return {
        type: "FETCH_DEPARTMENTS",
        payload: departments
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

// Thêm nhân viên
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

// Chỉnh sửa nhân viên
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

// Xóa nhân viên
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