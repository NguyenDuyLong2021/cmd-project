import axiosClient from "./axiosClient"

const baseUrl = "http://localhost:3031/tasks"
const todoListApi = {
    // get all tack of to do list
    getAllTask: (params) => {
        let url = `${baseUrl}`;
        return axiosClient.get(url);
    },
    //get detail a task
    getDetailTask: (params) => {
        let url = `${baseUrl}/${params.id}`;
        return axiosClient.get(url)
    },
    getTaskLimited: (params) => {
        //cai nay dung de phan trang
        let url = `${baseUrl}?_page=${params.page}&_limit=10`
        if (params.filter.length > 0) {
            params.filter.forEach(element => {
                switch (element) {
                    case "Hoàn tất":
                        url += '&status=1'
                        break;
                    case "Bị từ chối":
                        url += '&status=2'
                        break;
                    case "Đã hủy":
                        url += '&status=3'
                        break;
                    case "Mới":
                        url += '&status=4'
                        break;
                    case "Đang làm":
                        url += '&status=5'
                        break;
                    case "Chờ xác nhận":
                        url += '&status=6'
                        break;
                    case "Hoàn thành":
                        url += '&status=7'
                        break;
                    case "Qúa hạn":
                        url += '&status=8'
                        break;
                    default:
                        return;
                }
            });
        }
        if (params.advanced.length > 0) {
            params.advanced.forEach(element => {
                url += element
            })
        }
        return axiosClient.get(url, { params })
    },
    //search by params
    searchByParams: (params) => {
        let url = `/${params.object}?${params.contain}=${params.key}&_limit=10`;
        return axiosClient.get(url)
    },
    newtTask: (params) => {
        const url = `${baseUrl}`
        axiosClient.post(url, params)
    }

}
export default todoListApi;