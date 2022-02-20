import { BiSearchAlt } from "react-icons/bi";
import { BsFillBagPlusFill, BsFillFileEarmarkPostFill } from "react-icons/bs";
import { AiFillFilter } from "react-icons/ai";
import ButtonStatus from "./assigned-to-me/ButtonStatus";
import * as todoListAction from "../../actions/todoListAction"
import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import PaginationCustomize from "./PaginationCustomize";
import NewTask from "./NewTask";
const nameButtonStatus = ["Mới nhất", "Cũ nhất", "Đang làm", "Hoàn thành", "Ưu tiên", "Chờ xác nhận", "Qúa hạn", "Đã hủy"]
const TodoList = () => {
    const dispacth = useDispatch()
    const [req, setReq] = useState({ page: 1, filter: [], advanced: [] })
    const [modalNewTask, showModalNewTask] = useState(false)
    //dispatch task request
    const getTasks = () => {
        const request = todoListAction.dispatchTaskRequest({ page: 1, filter: [], advanced: [] })
        dispacth(request)
    }
    useEffect(() => {
        getTasks()
    }, [req])
    // get task
    const tasks = useSelector(state => state.TodoListReducer.tasks)
    return (
        <>
            <div className="container-fluid">
                <div className="d-flex justify-content-between">
                    <div className="col">
                        <p className="fw-bold">DANH SÁCH CÔNG VIỆC</p>
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-center mx-auto">
                            <div className="d-inline-flex form-control p-0">
                                <BiSearchAlt className="mx-auto" size={20} />
                                <div className="w-100 p-0">
                                    <input className="w-100b" type="text" style={{ border: "none", outline: "none" }} placeholder="" />
                                </div>
                            </div>
                            <div className="ps-1" >
                                <button type="button" className="btn btn-primary btn-sm" style={{ whiteSpace: "nowrap" }}>Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-evenly">
                            <div className="mx-1">
                                <button type="button" className="btn btn-sm" onClick={() => showModalNewTask(true)} data-mdb-ripple-color="dark"><BsFillBagPlusFill size={20} /> Tạo việc</button>
                            </div>
                            <div className="mx-1">
                                <button type="button" className="btn btn-sm" data-mdb-ripple-color="dark"><BsFillFileEarmarkPostFill size={20} />Báo cáo</button>
                            </div>
                            <div className="mx-1">
                                <button type="button" className="btn btn-sm" data-mdb-ripple-color="dark"><AiFillFilter size={20} /> Bộ lọc</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row p-4 d-flex flex-row">
                    <div className="d-flex flex-row mb-3" >
                        <div className="p-2 mx-auto">
                            <input type="radio" className="btn-check" name="options-outlined" id="all-outline" autoComplete="off" defaultChecked />
                            <label className="btn btn-outline-darkBlue btn-sm" htmlFor="all-outline">Tất cả</label>
                        </div>
                        <div className="p-2 mx-auto">
                            <input type="radio" className="btn-check" name="options-outlined" id="mine-outlined" autoComplete="off" />
                            <label className="btn btn-outline-darkBlue btn-sm" htmlFor="mine-outlined">Của tôi</label>
                        </div>
                        {
                            //render button status
                            nameButtonStatus.map((item, id) => <ButtonStatus key={id} id={id} nameStatus={item} />)
                        }
                        <div className="p-2 mx-auto">
                            <label style={{ whiteSpace: "nowrap" }}>Tổng : 145</label>
                        </div>
                    </div>
                </div>
                <div className="row ms-4 me-4">
                    <div className="col-4 space--nowrap ms-5">
                        <span style={{ fontSize: "11px" }} className="fw-bold">TÊN CÔNG VIỆC</span>
                    </div>
                    <div className="col-1"><span className="fw-bold" style={{ fontSize: "11px" }}>NGƯỜI GIAO</span></div>
                    <div className="col-1"><span className="fw-bold" style={{ fontSize: "11px" }}>NGƯỜI LÀM</span></div>
                    <div className="col-2 position-relative me-5"><span className="fw-bold position-absolute top-50 end-0 translate-middle-y" style={{ fontSize: "11px" }}>THỜI GIAN</span></div>
                    <div className="col-1 position-relative ms-5"><span className="fw-bold position-absolute top-50 end-0 translate-middle-y" style={{ fontSize: "11px" }}>TÌNH TRẠNG</span></div>
                    <div className="col-1 position-relative ms-2"><span className="fw-bold position-absolute top-50 end-0 translate-middle-y" style={{ fontSize: "11px" }}>ĐÁNH GIÁ</span></div>
                </div>
                <div className="d-flex flex-column">
                    {tasks.map((item, key) => <TaskItem key={key} name={item.name} avartarCreater={item.employees.avatar} avartarEmployee={item.employees.avatar}
                        nameCreater={item.creater.last_name + " " + item.creater.first_name} nameEmployee={item.employees.name} properties={item.properties} />)}
                </div>
                <div className="row">
                    <PaginationCustomize />
                </div>
            </div>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <NewTask show={modalNewTask} onHide={() => showModalNewTask(false)} />
            </div>
        </>
    );
}
export default TodoList