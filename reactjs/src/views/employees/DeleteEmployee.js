import { CButton, CDropdownItem, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import * as actions from '../../actions/employeesAction'
import AppToaster from '../../components/AppToaster'

const DeleteEmployee = ({ id }) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)
    const [notification, setNotification] = useState(false)
    const handleDelete = (id) => {
        dispatch(actions.deleteEmployeeRequest(id))
        setNotification(true)
        setVisible(false)
    }

    return (
        <>
            <CDropdownItem
                component="button"
                onClick={() => setVisible(!visible)}
            >
                <BiTrash /> Xóa
            </CDropdownItem>
            <CModal
                scrollable
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <CModalHeader>
                    <CModalTitle>XÓA NHÂN VIÊN</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    Bạn có chắc muốn xóa nhân viên này khỏi công ty?
                </CModalBody>
                <CModalFooter>
                    <CButton
                        color="secondary"
                        className="text-white"
                        onClick={() => setVisible(false)}
                    >
                        Hủy
                    </CButton>
                    <CButton
                        color="danger"
                        className="text-white"
                        onClick={() => handleDelete(id)}
                    >
                        Đồng ý
                    </CButton>
                </CModalFooter>
            </CModal>
            {notification ? <AppToaster title="Thông báo" content="Xóa nhân viên thành công" /> : null}
        </>
    )
}

export default DeleteEmployee