import React, { useState } from 'react'
import { BsFileLock, BsFillCircleFill, BsThreeDotsVertical } from "react-icons/bs"
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CTableDataCell, CTableRow } from '@coreui/react'
import DeleteEmployee from './DeleteEmployee'
import EditEmployee from './SubmitEmployee/EditEmployee'

const EmployeeItem = ({ employee }) => {
    const showDate = () => {
        const dateOfBirth = new Date(employee.dob)
        return "" + (dateOfBirth.getDate() < 10 ? "0" : "") + dateOfBirth.getDate() + "/" + (dateOfBirth.getMonth() + 1 < 10 ? "0" : "") + (dateOfBirth.getMonth() + 1) + "/" + dateOfBirth.getFullYear()
    }
    return (
        <CTableRow>
            <CTableDataCell>{(employee.user?.is_activated === true) ? (<BsFillCircleFill size={8} />) : (<span className="rounded-circle bg-secondary" style={{ width: ".75rem", height: ".75rem" }} />)}</CTableDataCell>
            <CTableDataCell>{employee.name}</CTableDataCell>
            <CTableDataCell>{showDate()}</CTableDataCell>
            <CTableDataCell>{employee.email}</CTableDataCell>
            <CTableDataCell>{employee.phone}</CTableDataCell>
            <CTableDataCell>{employee.department?.name}</CTableDataCell>
            <CTableDataCell>{employee.position?.name}</CTableDataCell>
            <CTableDataCell>
                <CDropdown popper={false} direction="dropstart">
                    <CDropdownToggle color="none" className="py-0" caret={false}>
                        <BsThreeDotsVertical color="primary" />
                    </CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem>
                            <BsFileLock /> Cấp lại mật khẩu
                        </CDropdownItem>
                        <EditEmployee employee={employee} />
                        <DeleteEmployee id={employee.id} />
                    </CDropdownMenu>
                </CDropdown>
            </CTableDataCell>
        </CTableRow>
    )
}

export default EmployeeItem