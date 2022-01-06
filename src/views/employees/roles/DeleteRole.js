import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useState } from 'react'
import { BiTrash } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import * as actions from '../../../actions/rolesAction'
import AppToaster from '../../../components/AppToaster'

const DeleteRole = ({ id }) => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false)
    const [notification, setNotification] = useState(false)
    const handleDelete = (id) => {
        dispatch(actions.deleteRoleRequest(id))
        setNotification(true)
        setVisible(false)
    }

    return (
        <>
            <CButton
                color="danger"
                className="col-4 text-white"
                onClick={() => setVisible(true)}
            >
                <BiTrash /> <span className="ps-1">Xóa</span>
            </CButton>
            <CModal
                scrollable
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <CModalHeader>
                    <CModalTitle>XÓA VAI TRÒ</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    Bạn có chắc muốn xóa vai trò này khỏi công ty?
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
            {notification ? <AppToaster title="Thông báo" content="Xóa vai trò thành công" /> : null}
        </>
    )
}

export default DeleteRole