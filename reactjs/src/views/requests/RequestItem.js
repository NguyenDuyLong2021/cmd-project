import React, { useState } from 'react'
import { BsFileLock, BsFillCircleFill, BsThreeDotsVertical } from "react-icons/bs"
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CTableDataCell, CTableRow } from '@coreui/react'

const EmployeeItem = ({ request }) => {
    const showDate = () => {
        const dateOfBirth = new Date(request.created_at)
        return "" + (dateOfBirth.getDate() < 10 ? "0" : "") + dateOfBirth.getDate() + "/" + (dateOfBirth.getMonth() + 1 < 10 ? "0" : "") + (dateOfBirth.getMonth() + 1) + "/" + dateOfBirth.getFullYear()
    }
    return (
        <CTableRow>
            <CTableDataCell></CTableDataCell>
            <CTableDataCell>{request.requester.name}</CTableDataCell>
            <CTableDataCell>{request.reqtype.name}</CTableDataCell>
            <CTableDataCell>{request.request_reason}</CTableDataCell>
            <CTableDataCell>{showDate()}</CTableDataCell>
            <CTableDataCell>{request.reqtype.statuses[0].name}</CTableDataCell>
            <CTableDataCell>
                {/* <CDropdown popper={false} direction="dropstart">
                    <CDropdownToggle color="none" className="py-0" caret={false}>
                        <BsThreeDotsVertical color="primary" />
                    </CDropdownToggle>
                    <CDropdownMenu>
                        <CDropdownItem>
                            <BsFileLock /> Cấp lại mật khẩu
                        </CDropdownItem>
                        <EditEmployee request={request} />
                        <DeleteEmployee id={request.id} />
                    </CDropdownMenu>
                </CDropdown> */}
            </CTableDataCell>
        </CTableRow>
    )
}

export default EmployeeItem