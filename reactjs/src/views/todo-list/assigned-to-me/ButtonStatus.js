import { useState } from "react"

function ButtonStatus(props) {
    console.log("được render lại nè")
    const [active, setActive] = useState(false)
    return (
        <div className="p-2 mx-auto">
            <input type="checkbox" className="btn-check" id={props.id} autoComplete="off" />
            <label className="btn btn-outline-darkBlue btn-sm" htmlFor={props.id}>{props.nameStatus}</label><br />
        </div>
        // btn btn-outline-darkBlue btn-sm
    )
}
export default ButtonStatus