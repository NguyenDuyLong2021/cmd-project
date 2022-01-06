import rolesApi from '../api/rolesApi'

// Nạp thông tin vai trò
export const fetchRoles = (roles) => {
    return {
        type: "FETCH_ROLES",
        payload: roles
    }
}
export const fetchRolesRequest = (params) => {
    return (dispatch) => {
        rolesApi.getAll(params)
            .then(response => {
                dispatch(fetchRoles(response.data))
            })
            .catch(error => alert(error))
    }
}
//

// Thêm vai trò
export const addRole = (role) => {
    return {
        type: "ADD_ROLE",
        payload: role
    }
}
export const addRoleRequest = (role) => {
    return (dispatch) => {
        rolesApi.add(role)
            .then(response => {
                dispatch(addRole(response.data))
            })
            .catch(error => alert(error))
    }
}
//

// Chỉnh sửa vai trò
export const updateRole = (role) => {
    return {
        type: "UPDATE_ROLE",
        payload: role
    }
}
export const updateRoleRequest = (role) => {
    return (dispatch) => {
        rolesApi.update(role)
            .then(response => {
                dispatch(updateRole(response.data))
            })
            .catch(error => alert(error))
    }
}
//

// Xóa vai trò
export const deleteRole = (id) => {
    return {
        type: "DELETE_ROLE",
        payload: id
    }
}
export const deleteRoleRequest = (id) => {
    return (dispatch) => {
        rolesApi.delete(id)
        .then(() => {
            dispatch(deleteRole(id))
        })
        .catch(error => alert(error))
    }
}
//