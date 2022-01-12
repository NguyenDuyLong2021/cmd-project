import React from 'react'
import { Button, Dropdown } from 'react-bootstrap'
import { BsFileLock, BsFillCircleFill, BsThreeDotsVertical } from "react-icons/bs"
import DeleteEmployee from './DeleteEmployee'
import EditEmployee from './SubmitEmployee/EditEmployee'

const EmployeeItem = ({ employee }) => {
    const showDate = () => {
        const dateOfBirth = new Date(employee.dob)
        return "" + (dateOfBirth.getDate() < 10 ? "0" : "") + dateOfBirth.getDate() + "/" + (dateOfBirth.getMonth() + 1 < 10 ? "0" : "") + (dateOfBirth.getMonth() + 1) + "/" + dateOfBirth.getFullYear()
    }
    return (
        <tr>
            <td>{(employee.user?.is_activated === true) ? (<BsFillCircleFill size={8} />) : (<span className="rounded-circle bg-secondary" style={{ width: ".75rem", height: ".75rem" }} />)}</td>
            <td>{employee.name}</td>
            <td>{showDate()}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.department?.name}</td>
            <td>{employee.position?.name}</td>
            <td>
                <Dropdown>
                    <Dropdown.Toggle className="bg-none">
                        <BsThreeDotsVertical />
                    </Dropdown.Toggle>
                    <Dropdown.Menu rootCloseEvent="click">
                        <Dropdown.Item>
                            <BsFileLock /> Cấp lại mật khẩu
                        </Dropdown.Item>
                        <EditEmployee employee={employee} />
                        <DeleteEmployee id={employee.id} />
                    </Dropdown.Menu>
                </Dropdown>
            </td>
        </tr>
    )
}

export default EmployeeItem