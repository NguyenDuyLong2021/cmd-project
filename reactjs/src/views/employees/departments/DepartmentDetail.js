import React from 'react'
import { ListGroup, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const DepartmentDetail = ({ department }) => {
    const departments = useSelector(state => state.departments.data)
    let parentName = ""
    departments.forEach(dp => {
        if (dp.id === department.parent_id) {
            parentName = dp.name
        }
    })
    return (
        <ListGroup variant="flush">
            <ListGroup.Item>
                Mã phòng ban: {department.code}
            </ListGroup.Item>
            <ListGroup.Item>
                Tên phòng ban: {department.name}
            </ListGroup.Item>
            <ListGroup.Item>
                Thuộc sự quản lý của phòng ban: {parentName || department.name}
            </ListGroup.Item>
            <ListGroup.Item>
                Mô tả về phòng ban: {(department.description === "") ? "Chưa có mô tả" : department.description}
            </ListGroup.Item>
            <ListGroup.Item>
                <Table
                    striped
                    hover
                    responsive
                    borderless
                >
                    <thead>
                        <tr>
                            <td scope="col">CHỨC VỤ</td>
                            <td scope="col">VAI TRÒ</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            department.positions.map((position, index) => (
                                <tr key={index}>
                                    <td>{position.name}</td>
                                    <td>{position?.role.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default DepartmentDetail