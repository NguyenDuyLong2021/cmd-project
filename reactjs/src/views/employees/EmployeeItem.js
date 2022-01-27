import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { BsFileLock, BsThreeDotsVertical } from "react-icons/bs"
import DeleteEmployee from './DeleteEmployee'
import EditEmployee from './SubmitEmployee/EditEmployee'

const EmployeeItem = ({ employee }) => {
    const showDate = () => {
        const dateOfBirth = new Date(employee.dob)
        return "" + (dateOfBirth.getDate() < 10 ? "0" : "") + dateOfBirth.getDate() + "/" + (dateOfBirth.getMonth() + 1 < 10 ? "0" : "") + (dateOfBirth.getMonth() + 1) + "/" + dateOfBirth.getFullYear()
    }
    return (
        <div className="item row justify-content-evenly align-items-center">
            <div className="item-label" />
            {/* <div className="col-auto">{(employee.user?.is_activated === true) ? (<BsFillCircleFill size={8} />) : (<span className="rounautoed-circle bg-secondary" style={{ width: ".75rem", height: ".75rem" }} />)}</div> */}
            <div className="col-2 text-break" style={{ paddingLeft: "6rem" }}>{employee.name}</div>
            <div className="col-1 text-break">{showDate()}</div>
            <div className="col-2 text-break">{employee.email}</div>
            <div className="col-1 text-break">{employee.phone}</div>
            <div className="col-2 text-break">{employee.department?.name}</div>
            <div className="col-2 text-break">{employee.position?.name}</div>
            <Dropdown className="more col-auto p-0">
                <Dropdown.Toggle variant="none">
                    <BsThreeDotsVertical />
                </Dropdown.Toggle>
                <Dropdown.Menu className="animate__animated animate__zoomIn animate__faster">
                    <Dropdown.Item>
                        <BsFileLock /> Cấp lại mật khẩu
                    </Dropdown.Item>
                    <EditEmployee employee={employee} />
                    <DeleteEmployee id={employee.id} />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default EmployeeItem