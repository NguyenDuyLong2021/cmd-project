import { CListGroup, CListGroupItem, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const DepartmentDetail = ({ department }) => {
    const departments = useSelector(state => state.departments)
    let parentName = ""
    departments.forEach(dp => {
        if (dp.id === department.parent_id) {
            parentName = dp.name
        }
    })
    return (
        <CListGroup flush>
            <CListGroupItem>
                Mã phòng ban: {department.code}
            </CListGroupItem>
            <CListGroupItem>
                Tên phòng ban: {department.name}
            </CListGroupItem>
            <CListGroupItem>
                Thuộc sự quản lý của phòng ban: {parentName || department.name}
            </CListGroupItem>
            <CListGroupItem>
                Mô tả về phòng ban: {(department.description === "") ? "Chưa có mô tả" : department.description}
            </CListGroupItem>
            <CListGroupItem>
                <CTable
                    striped
                    hover
                    responsive
                    borderless
                    align="middle"
                >
                    <CTableHead>
                        <CTableRow>
                            <CTableHeaderCell scope="col">CHỨC VỤ</CTableHeaderCell>
                            <CTableHeaderCell scope="col">VAI TRÒ</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {
                            department.positions.map((position, index) => (
                                <CTableRow key={index}>
                                    <CTableDataCell>{position.name}</CTableDataCell>
                                    <CTableDataCell>{position?.role.name}</CTableDataCell>
                                </CTableRow>
                            ))
                        }
                    </CTableBody>
                </CTable>
            </CListGroupItem>
        </CListGroup>
    )
}

export default DepartmentDetail