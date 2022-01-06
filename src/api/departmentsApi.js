import axios from "axios"

// API nhân viên
const baseUrl = "http://localhost:3030/departments"
const departmentsApi = {
    getAll: (params) => {
        const requestUrl = `${baseUrl}`
        return axios.get(requestUrl, {params})
    },
    get: (id) => {
        const requestUrl = `${baseUrl}/${id}`
        return axios.get(requestUrl)
    },
    add: (data) => {
        const requestUrl = `${baseUrl}`
        return axios.post(requestUrl, data)
    },
    update: (data) => {
        const requestUrl = `${baseUrl}/${data.id}`
        return axios.patch(requestUrl, data)
    },
    delete: (id) => {
        const requestUrl = `${baseUrl}/${id}`
        return axios.delete(requestUrl)
    }
}
//

export default departmentsApi