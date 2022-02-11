import { useState } from "react"
import { MdMoreVert } from "react-icons/md"
import StarRatings from "react-star-ratings"
const TaskItem = (props) => {
    const [rating, setRating] = useState(0)
    console.log(JSON.parse(props.properties))
    const status = (indexStatus) => {
        switch (indexStatus) {
            case 1:
                return "Hoàn tất"

            case 2:
                return "Bị từ chối"

            case 3:
                return "Đã hủy"

            case 4:
                return "Mới"

            case 5:
                return "Đang làm"
            case 6:
                return "Chờ xác nhận"
            case 7:
                return "Hoàn thành"
            case 8:
                return "Qúa hạn"
        }
    }
    return (
        <div className="row p-2 m-4 item">
            <div className="item-label"></div>
            <div className="col-4 ms-5 position-relative">
                <span className="small position-absolute top-50 start-0 translate-middle-y">{props.name}</span>
            </div>
            <div className="col-1 position-relative">
                <img className="rounded-pill position-absolute top-50 end-0 translate-middle-y me-3" style={{ width: "30px", height: "30px" }} src={props.avartarCreater} title={props.nameCreater} alt={props.nameCreater} />
            </div>
            <div className="col-1 position-relative">
                <img className="rounded-pill position-absolute top-50 start-0 translate-middle-y ms-3" style={{ width: "30px", height: "30px" }} src={props.avartarEmployee} title={props.nameEmployee} alt={props.nameEmployee} />
            </div>
            <div className="col-2 position-relative me-5">
                <div className="position-absolute top-50 end-0 translate-middle-y">
                    <span style={{ fontSize: "11px" }}>{JSON.parse(props.properties).start_date.split("T")[0]}-{JSON.parse(props.properties).done_at.split("T")[0]}</span>
                </div>
            </div>
            <div className="col-1 d-flex align-items-end flex-column ms-5">
                <span className="space--nowrap fw-bold me-0" style={{ fontSize: "12px" }}>{status(JSON.parse(props.properties).status)}</span>
                <span style={{ fontSize: "11px" }}>20/11/2021</span>
            </div>
            <div className="col-1 position-relative ms-5">
                <div className="position-absolute top-50 start-0 translate-middle-y">
                    <StarRatings rating={rating} starRatedColor={"#2391F5"} starHoverColor={"#85B6FF"} name={"sao"} starEmptyColor={"#85B6FF"} changeRating={(rate) => setRating(rate)} starDimension="15px" starSpacing="5px" numberOfStars={3} />
                </div>
                <span className="position-absolute top-50 end-0 translate-middle-y me-2">
                    <MdMoreVert size={25} />
                </span>
            </div>
        </div>
    )
}
export default TaskItem