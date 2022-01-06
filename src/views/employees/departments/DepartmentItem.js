import { CButton, CDropdown, CDropdownMenu, CDropdownToggle, CListGroupItem, CModal, CModalBody, CModalTitle } from '@coreui/react'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsFillCircleFill } from 'react-icons/bs'
import DeleteDepartment from './DeleteDepartment'
import DepartmentDetail from './DepartmentDetail'
import ButtonShowPositions from './positions/ButtonShowPositions'
import EditDepartment from './SubmitDepartment/EditDepartment'

const DepartmentItem = ({ department, level }) => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CListGroupItem
                component="button"
                className="position-relative"
                style={{ paddingLeft: level * 40 }}
                onClick={() => setVisible(true)}
            >
                <BsFillCircleFill size={5} />
                <span className="ps-2" />
                {department.name}
            </CListGroupItem>
            <CModal
                fullscreen
                scrollable
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <div className="modal-header row justify-content-between">
                    <div className="col">
                        <CModalTitle>CHI TIẾT PHÒNG BAN</CModalTitle>
                    </div>
                    <div className="col-auto">
                        <CDropdown popper={false} direction="dropstart">
                            <CDropdownToggle color="none" caret={false}>
                                <BiDotsHorizontalRounded className="fs-4" />
                            </CDropdownToggle>
                            <CDropdownMenu>
                                <ButtonShowPositions department={department} />
                                <EditDepartment department={department} />
                                <DeleteDepartment id={department.id} />
                            </CDropdownMenu>
                        </CDropdown>
                        <CButton color="none" onClick={() => setVisible(false)}>
                            <AiOutlineClose className="fs-4" />
                        </CButton>
                    </div>
                </div>
                <CModalBody>
                    <DepartmentDetail department={department} />
                </CModalBody>
            </CModal>
        </>
    )
}

export default DepartmentItem