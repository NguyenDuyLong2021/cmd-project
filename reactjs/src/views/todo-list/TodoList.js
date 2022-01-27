import { BiSearchAlt } from "react-icons/bi";
import { BsFillBagPlusFill, BsFillFileEarmarkPostFill } from "react-icons/bs";
import { AiFillFilter } from "react-icons/ai";
import ButtonStatus from "./assigned-to-me/ButtonStatus";
import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";
const nameButtonStatus = ["Mới nhất", "Cũ nhất", "Đang làm", "Hoàn thành", "Ưu tiên", "Chờ xác nhận", "Qúa hạn", "Đã hủy"]
const TodoList = () => {
    const [switchToTaskMine, setStateMine] = useState(false)
    return (
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
                            <button type="button" className="btn btn-sm" data-mdb-ripple-color="dark"><BsFillBagPlusFill size={20} /> Tạo việc</button>
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
            <div className="d-flex flex-column mb-1">
                <div className="row">
                    <div className="col-1 space--nowrap mx-auto">
                    </div>
                    <div className="col-4 space--nowrap mx-auto small ">TÊN CÔNG VIỆC</div>
                    <div className="col-1 space--nowrap mx-auto small">NGƯỜI GIAO</div>
                    <div className="col-1 space--nowrap mx-auto small">NGƯỜI LÀM</div>
                    <div className="col-1 space--nowrap mx-auto small">THỜI GIAN</div>
                    <div className="col-1 space--nowrap mx-auto small">TÌNH TRẠNG</div>
                    <div className="col-1 space--nowrap mx-auto small">ĐÁNH GIÁ</div>
                    <div className="col-1 space--nowrap mx-auto small"></div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <TaskItem/>

            </div>
        </div>
    )
}
export default TodoList