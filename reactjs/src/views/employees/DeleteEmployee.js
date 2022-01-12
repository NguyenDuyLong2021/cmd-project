import React, { useState } from 'react'
import { Button, Dropdown, Modal } from 'react-bootstrap'
import { BiTrash } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import * as actions from '../../actions/employeesAction'
import AppToaster from '../../components/AppToaster'

const DeleteEmployee = ({ id }) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)
    const [visibleNotificationDeleteSuccess, setVisibleNotificationDeleteSuccess] = useState(false)
    const handleDelete = (id) => {
        dispatch(actions.deleteEmployeeRequest(id))
        setVisibleNotificationDeleteSuccess(true)
        setVisible(false)
    }

    return (
        <>
            <Dropdown.Item
                component="button"
                onClick={() => setVisible(!visible)}
            >
                <BiTrash /> Xóa
            </Dropdown.Item>
            <Modal
                scrollable
                show={visible}
                onHide={() => setVisible(false)}
            >
                <Modal.Header closeButton closeVariant="white" className="bg-gradient text-white">
                    <Modal.Title>XÓA NHÂN VIÊN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc muốn xóa nhân viên này khỏi công ty?
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => setVisible(false)}
                    >
                        Hủy
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => handleDelete(id)}
                    >
                        Đồng ý
                    </Button>
                </Modal.Footer>
            </Modal>
            <AppToaster visible={visibleNotificationDeleteSuccess} setVisible={setVisibleNotificationDeleteSuccess} title="Nhân viên" content="Xóa nhân viên thành công" />
        </>
    )
}

export default DeleteEmployee