import * as types from "../constants/ActionTask"
import todoListApi from '../api/todoListApi';
// lấy luôn dữ liệu trong action , không gọi api trong component 
export const dispatchLimitedTaskRequest = (data) => {
    return (dispatch) => {
        const fetchTasksList = async () => {
            try {
                const response = await todoListApi.getTaskLimited(data)//getTaskLimited() function using to load data task with data limited a page is 10 task
               console.log("rp", response)
                dispatch(dispatchTaskByFilterStatus(response))
            } catch (error) {
                console.log("Can not load...!", error)
            }
        }
        fetchTasksList()
    }
}
// lấy luôn dữ liệu trong action , không gọi api trong component 
export const getAllTaskRequest = () => {
    return (dispatch) => {
        const fetchTasksList = async () => {
            try {
                const response = await todoListApi.getAllTask()//getTaskLimited() function using to load data task with data limited a page is 10 task
                dispatch(dispatchAllTask(response))
            } catch (error) {
                console.log("Can not load...!", error)
            }
        }
        fetchTasksList()
    }
}
// luu du lieu duoc loc vao store
export const dispatchTaskByFilterStatus = (tasks) => { return { type: types.DISPATCH_TASK_BY_STATUS, tasks } }
// luu tat cac cac cong viec vao trong store
export const dispatchAllTask = (tasks) => { return { type: types.DISPATCH_ALL_TASK, tasks } }
// action kiem tra da duoc render xong chua
export const isRenderDone = () => { return { type: types.IS_RENDER_DONE } }//sua ngay 11/11/2021 tyqe sang type
//them item vao mang cac item can loc
export const addItemNeedFilter = (item) => { return { type: types.ADD_ITEM_NEED_FILTER, item } }
// xoa item khoi mang cac item can loc
export const removeNeedItemFilter = (item) => { return { type: types.REMOVE_ITEM_NEED_FILTER, item } }
// set trang hien tai 
export const numberPageCurrent = (numberPage) => { return { type: types.NUMBER_PAGE_CURRENT, numberPage } }
// se thay doi trang thai xem có hiện filter advanced
export const isShowFilterAdvanced = () => { return { type: types.IS_SHOW_FILTER_ADVANCED } }
// se thay doi trang thai xem có hiện form tạo việc hay không
export const isShowCreateTask = () => { return { type: types.IS_SHOW_CREATE_TASK } }
//se hien thi date input cua ngay bat đau
export const showDateInputOfDateStart = () => { return { type: types.SHOW_DATE_INPUT_START_DATE } }
//se hien thi date input cua ngay ket thuc
export const showDateInputOfDateEnd = () => { return { type: types.SHOW_DATE_INPUT_END_DATE } }
//cap nhat ngay bat dau cong viec cua bo loc nang cao
export const updateDateStartFilterAdvanced = (date) => { return { type: types.UPDATE_DATE_START_FILTER_ADVANCED, date } }
//cap nhat ngay ket thuc cong viec cua bo loc nang cao
export const updateDateEndFilterAdvanced = (date) => { return { type: types.UPDATE_DATE_END_FILTER_ADVANCED, date } }
//se hien thi date input cua ngay bat đau
export const showDetailTask = () => { return { type: types.IS_SHOW_DETAIL_TASK } }
//lây chi tiết công việc
export const getTaskDetailRequest = (params) => {
    return (dispatch) => {
        const fetchTasksDetail = async () => {
            try {
                const response = await todoListApi.getDetailTask(params)//getDetailTask() function using to load data task with data limited a page is 10 task
                dispatch(dispatchTaskDetail(response))
            } catch (error) {
                console.log("Can not load...!", error)
            }
        }
        fetchTasksDetail()
    }
}
// luu chi tiet cong viec vua duoc goi vao store
export const dispatchTaskDetail = (task) => { return { type: types.DISPATCH_TASK_DETAIL, task } }
//công cụ search theo params
export const searchByParams = (params) => {
    return (dispatch) => {
        const fetchSearchByParams = async () => {
            try {
                const response = await todoListApi.searchByParams(params)//getDetailTask() function using to load data task with data limited a page is 10 task
                console.log(response.data)
                dispatch(dispatchEmployeeSearch(response.data))
            } catch (error) {
                console.log("Can not load...!", error)
            }
        }
        fetchSearchByParams()
    }
}
// luu nhung thong tin nhan vien theo search
export const dispatchEmployeeSearch = (data) => { return { type: types.DISPATCH_LIST_EMPLOYEE_SEARCH, data } }
//hiển thị drop down menu
export const showDropdownMenu = () => { return { type: types.SHOW_DROP_DOWN_MENU } }
//select item dropdown menu
export const selectedDropdownMenu = (item) => { return { type: types.SELECTED_DROP_DOWN_MENU, item } }
//lay ngay thoi diem bat dau cua mot cong viec moi
export const timeStartNewTask = (date) => { return { type: types.TIME_START_NEW_TASK, date } }
//lay ngay thoi diem hoan thanh cua mot cong viec moi
export const timeStartCompleteTask = (date) => { return { type: types.TIME_COMPLETE_NEW_START, date } }
//hien thi date picker thoi diem băt dau mot cong viec moi
export const showTimeStartNewTask = () => { return { type: types.SHOW_DATE_PICKER_START_NEW_TASK } }
//hien thi date picker thoi diem ket thuc cua mot cong viec moi
export const showTimeCompleteNewTask = () => { return { type: types.SHOW_DATE_PICKER_COMPLETES_NEW_TASK } }
// tao cong viec moi
export const creatNewTask = (param) => {
    return () => {
        const newTask = async () => {
            try {
                await todoListApi.newtTask(param)//newtTask() function using to load data task with data limited a page is 10 task
            } catch (error) {
                console.log("Can not load...!", error)
            }
        }
        newTask()
    }
}
//công cụ search theo params
export const searchDepartment = (params) => {
    return (dispatch) => {
        const fetchSearchByParams = async () => {
            try {
                const response = await todoListApi.searchByParams(params)//getDetailTask() function using to load data task with data limited a page is 10 task
                dispatch(dispatchDepartmentSearch(response.data.data))
            } catch (error) {
                console.log("Can not load...!", error)
            }
        }
        fetchSearchByParams()
    }
}
// luu nhung thong tin nhan vien theo search
export const dispatchDepartmentSearch = (data) => { return { type: types.DISPATCH_DEPARTMENT_SEARCH, data } }
// lấy luôn dữ liệu trong action , không gọi api trong component 
export const dispatchFilterAdvanced = (data) => {
    return (dispatch) => {
        const fetchTasksList = async () => {
            try {
                const response = await todoListApi.getTaskLimited(data)//getTaskLimited() function using to load data task with data limited a page is 10 task
                dispatch(dispatchTaskByFilterAdvanced(response))
            } catch (error) {
                console.log("Can not load...!", error)
            }
        }
        fetchTasksList()
    }
}
// luu du lieu duoc loc vao store
export const dispatchTaskByFilterAdvanced = (tasks) => { return { type: types.DISPATCH_TASK_BY_FILTER_ADVANCED, tasks } }
//công cụ search theo params
export const searchTask = (params) => {
    return (dispatch) => {
        const fetchSearchByParams = async () => {
            try {
                const response = await todoListApi.searchByParams(params)//getDetailTask() function using to load data task with data limited a page is 10 task)
                dispatch(dispatchSearchTask(response.data))
            } catch (error) {
                console.log("Can not load...!", error)
            }
        }
        fetchSearchByParams()
    }
}
// luu nhung cong viec duoc tim kiem
export const dispatchSearchTask = (data) => { return { type: types.DISPATCH_TASK_SEARCH, data } }


