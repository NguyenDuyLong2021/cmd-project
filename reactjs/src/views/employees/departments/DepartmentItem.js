import React, { useState } from 'react'
import { Dropdown, ListGroup, Modal } from 'react-bootstrap'
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
            <ListGroup.Item
                action
                className="position-relative"
                style={{ paddingLeft: level * 40 }}
                onClick={() => setVisible(true)}
            >
                <BsFillCircleFill size={5} />
                <span className="ps-2" />
                {department.name}
            </ListGroup.Item>
            <Modal
                fullscreen
                scrollable
                show={visible}
                onHide={() => setVisible(false)}
            >
                <div className="modal-header row justify-content-between bg-gradient">
                    <div className="col">
                        <Modal.Title>CHI TIẾT PHÒNG BAN</Modal.Title>
                    </div>
                    <div className="col-auto row justify-content-between">
                        <Dropdown popper={false} placement="start">
                            <Dropdown.Toggle>
                                <BiDotsHorizontalRounded className="fs-4" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <ButtonShowPositions department={department} />
                                <EditDepartment department={department} />
                                <DeleteDepartment id={department.id} />
                            </Dropdown.Menu>
                        </Dropdown>
                        <button className="btn-close" onClick={() => setVisible(false)} />
                    </div>
                </div>
                <Modal.Body>
                    <DepartmentDetail department={department} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default DepartmentItem