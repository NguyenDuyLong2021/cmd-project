import requestsApi from '../api/requestsApi'

// Nạp thông tin đề xuất
export const fetchRequests = (requests) => {
    return {
        type: "FETCH_REQUESTS",
        payload: requests
    }
}
export const fetchRequestsRequest = (params) => {
    return (dispatch) => {
        requestsApi.getAll(params)
            .then(response => {
                dispatch(fetchRequests(response.data))
            })
            .catch(error => alert(error))
    }
}
//

// Thêm đề xuất
export const addRequest = (request) => {
    return {
        type: "ADD_REQUEST",
        payload: request
    }
}
export const addRequestRequest = (request) => {
    return (dispatch) => {
        requestsApi.add(request)
            .then(response => {
                dispatch(addRequest(response.data))
            })
            .catch(error => alert(error))
    }
}
//

// Chỉnh sửa đề xuất
export const updateRequest = (request) => {
    return {
        type: "UPDATE_REQUEST",
        payload: request
    }
}
export const updateRequestRequest = (request) => {
    return (dispatch) => {
        requestsApi.update(request)
            .then(response => {
                dispatch(updateRequest(response.data))
            })
            .catch(error => alert(error))
    }
}
//

// Xóa đề xuất
export const deleteRequest = (id) => {
    return {
        type: "DELETE_REQUEST",
        payload: id
    }
}
export const deleteRequestRequest = (id) => {
    return (dispatch) => {
        requestsApi.delete(id)
        .then(() => {
            dispatch(deleteRequest(id))
        })
        .catch(error => alert(error))
    }
}
//