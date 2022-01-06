import { CAccordionBody, CAccordionHeader, CListGroupItem, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'
import DeleteRole from './DeleteRole'
import EditRole from './SubmitRole/EditRole'

const RoleItem = ({ role }) => {
    return (
        <>
            <CAccordionHeader>
                {role.name}
            </CAccordionHeader>
            <CAccordionBody>
                <CListGroupItem>
                    <div className="row justify-content-around">
                        <EditRole role={role} />
                        <DeleteRole id={role.id} />
                    </div>
                </CListGroupItem>
                {
                    role.positions?.length === 0 ? <div className="list-group-item bg-light">Vai trò này chưa có chức vụ nào nắm giữ</div> : (
                        <CTable
                            striped
                            hover
                            responsive
                            borderless
                            align="middle"
                        >
                            <CTableHead>
                                <CTableRow className="fs-5">
                                    <CTableHeaderCell>CHỨC VỤ</CTableHeaderCell>
                                    <CTableHeaderCell>PHÒNG BAN</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {
                                    role.positions?.map(position => (
                                        <CTableRow key={position.id}>
                                            <CTableDataCell>{position.name}</CTableDataCell>
                                            <CTableDataCell>{position.department?.name}</CTableDataCell>
                                        </CTableRow>
                                    ))
                                }
                            </CTableBody>
                        </CTable>
                    )
                }
            </CAccordionBody>
        </>
    )
}

export default RoleItem