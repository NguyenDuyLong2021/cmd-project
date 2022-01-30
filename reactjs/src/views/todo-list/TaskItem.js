import { useState } from "react"
import { MdMoreVert } from "react-icons/md"
import StarRatings from "react-star-ratings"
const TaskItem = () => {
    const [rating, setRating]= useState(0)
    return (
        <div className="row bg-white rounded-pill m-4 p-3 item">
            <div className="col-1 space--nowrap mx-auto item-label">
            </div>
            <div className="col-4 space--nowrap ms-5">
                <span className="small">Xử lý hệ thống nước thải</span>
            </div>
            <div className="col-1 position-relative">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <img className="rounded-pill" style={{ width: "30px", height: "30px" }} src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi" />
                </div>
            </div>
            <div className="col-1 position-relative mx-auto">
                <div className="position-absolute top-50 start-50 translate-middle">
                    <img className="rounded-pill" style={{ width: "30px", height: "30px" }} src="https://randomuser.me/api/portraits/men/46.jpg" alt="Mario Rossi" />
                </div></div>
            <div className="col-1 space--nowrap mx-auto d-flex justify-content-center">
                <span className="small">12/01/2022</span>
                <span>{" - "}</span>
                <span className="small">25/01/2022</span>
            </div>
            <div className="col-1 space--nowrap mx-auto small">Đã hoàn thành</div>
            <div className="col-1 space--nowrap mx-auto small">
                <div style={{ width: "10px", height: "10px" }}>
                    <StarRatings rating={rating} starRatedColor={"#2391F5"} starHoverColor={"#85B6FF"} name={"sao"} starEmptyColor={"#85B6FF"} changeRating={(rate)=>setRating(rate)} starDimension="15px" starSpacing="5px" numberOfStars={3} />
                </div>
            </div>
            <div className="col-1 space--nowrap mx-auto"><MdMoreVert size={20} /></div>
        </div>
    )
}
export default TaskItem