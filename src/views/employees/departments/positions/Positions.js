import { CButton, CForm, CFormCheck, CFormFeedback, CFormInput, CFormLabel, CFormSelect, CListGroupItem, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { updateDepartmentRequest } from '../../../../actions/departmentsAction'
import { fetchRolesRequest } from '../../../../actions/rolesAction'
import AppToaster from '../../../../components/AppToaster'

const Positions = ({ visible, setVisible, department }) => {
    const roles = useSelector(state => state.roles)
    const dispatch = useDispatch()

    const [info, setInfo] = useState([])
    const [visibleDelete, setVisibleDelete] = useState(false)
    const [notificationUpdateSuccess, setNotificationUpdateSuccess] = useState(false)
    const [notificationDeleteSuccess, setNotificationDeleteSucces] = useState(false)

    useEffect(() => {
        dispatch(fetchRolesRequest())
    }, [])
    useEffect(() => {
        if (department.positions.length > 0) {
            setInfo(department.positions)
        }
    }, [])

    /* Các hàm thay đổi giá trị của state info mỗi khi người dùng nhập/chọn dữ liệu mới */
    const handleInputChange = (e) => {
        const index = e.target.tabIndex
        const name = e.target.name
        const value = (e.target.type === "checkbox") ? e.target.checked : e.target.value
        const start = info.slice(0, index) || []
        const end = info.slice(index + 1, info.length + 1) || []
        setInfo([
            ...start,
            {
                ...info[index],
                [name]: value
            },
            ...end
        ])
    }
    const handleRoleChange = (e) => {
        const index = e.target.tabIndex
        const value = e.target.value
        const findName = roles.find(role => role.id === Number(value))?.name
        const start = info.slice(0, index) || []
        const end = info.slice(index + 1, info.length + 1) || []
        setInfo([
            ...start,
            {
                ...info[index],
                role: {
                    id: Number(value),
                    name: findName
                }
            },
            ...end
        ])
    }
    const handleDelete = (index) => {
        const start = info.slice(0, index) || []
        const end = info.slice(index + 1, info.length + 1) || []
        setInfo([
            ...start,
            ...end
        ])
        setVisibleDelete(false)
        setNotificationDeleteSucces(true)
    }
    //

    // Thêm một form nhập chức vụ mới mỗi khi click vào Button Thêm chức vụ
    const showFormAddPostion = () => {
        if (info.length === 0) {
            setInfo([{
                name: "",
                is_lead: false,
                role: {
                    id: "",
                    name: ""
                }
            }])
        }
        else {
            setInfo([
                ...info,
                {
                    name: "",
                    is_lead: false,
                    role: {
                        id: "",
                        name: ""
                    }
                }
            ])
        }
    }

    /* Xử lý Submit Form */
    const [validated, setValidated] = useState(false)
    const handleSubmit = (e) => {
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        }
        setValidated(true)
        if (form.checkValidity() === true) {
            e.preventDefault()
            e.stopPropagation()
            dispatch(updateDepartmentRequest({
                ...department,
                positions: info
            }))
            setVisible(false)
            setNotificationUpdateSuccess(true)
        }
    }
    //

    return (
        <>
            <CModal
                fullscreen
                scrollable
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <div className="modal-header row justify-content-between">
                    <div className="col">
                        <CModalTitle>
                            CHỨC VỤ
                            <br />
                            {department.name}
                        </CModalTitle>
                    </div>
                    <div className="col-auto">
                        <CButton color="none" onClick={() => setVisible(false)}>
                            <AiOutlineClose className="fs-4" />
                        </CButton>
                    </div>
                </div>
                <CModalBody>
                    <CForm
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        {
                            info.map((position, index) => (
                                <div key={index}>
                                    <CListGroupItem className="bg-light">
                                        <div className="mb-3">
                                            <CFormLabel htmlFor="code">Tên chức vụ:</CFormLabel>
                                            <CFormInput
                                                type="text"
                                                name="name"
                                                tabIndex={index}
                                                placeholder="Nhập tên chức vụ..."
                                                value={position.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <CFormFeedback invalid>
                                                Vui lòng nhập tên chức vụ.
                                            </CFormFeedback>
                                        </div>
                                        <div className="mb-3">
                                            <CFormLabel htmlFor="name">Vai trò:</CFormLabel>
                                            <CFormSelect
                                                tabIndex={index}
                                                value={position.role?.id}
                                                label={position.role?.name}
                                                onChange={handleRoleChange}
                                            >
                                                {
                                                    roles.map(role => (
                                                        <option key={role.id} value={role.id}>{role.name}</option>
                                                    ))
                                                }
                                            </CFormSelect>
                                        </div>
                                        <div className="row justify-content-center">
                                        <CFormCheck
                                            label="Là trưởng phòng"
                                            name="is_lead"
                                            tabIndex={index}
                                            disabled={info.some(e => e.is_lead === true) && position.is_lead === false}
                                            checked={position.is_lead}
                                            onChange={handleInputChange}
                                        />
                                        <CButton color="none" onClick={() => setVisibleDelete(true)}>
                                            <BiTrash />
                                        </CButton>
                                        </div>
                                    </CListGroupItem>
                                    <br />
                                    <CModal
                                        backdrop="static"
                                        visible={visibleDelete}
                                        onClose={() => setVisibleDelete(false)}
                                    >
                                        <CModalHeader>
                                            <CModalTitle>XÓA CHỨC VỤ</CModalTitle>
                                        </CModalHeader>
                                        <CModalBody>
                                            Bạn có chắc muốn xóa chức vụ này khỏi phòng ban?
                                        </CModalBody>
                                        <CModalFooter>
                                            <CButton
                                                color="secondary"
                                                className="text-white"
                                                onClick={() => setVisibleDelete(false)}
                                            >
                                                Hủy
                                            </CButton>
                                            <CButton
                                                color="danger"
                                                className="text-white"
                                                onClick={() => handleDelete(index)}
                                            >
                                                Đồng ý
                                            </CButton>
                                        </CModalFooter>
                                    </CModal>
                                </div>
                            ))
                        }
                        <div className="mb-3 mt-3">
                            <CButton className="d-table m-auto" onClick={showFormAddPostion}>
                                Thêm chức vụ
                            </CButton>
                        </div>
                        <CModalFooter>
                            <CButton
                                className="d-block m-auto"
                                type="submit"
                            >
                                Lưu
                            </CButton>
                        </CModalFooter>
                    </CForm>
                </CModalBody>
            </CModal>
            {notificationUpdateSuccess ? <AppToaster title="Thông báo" content="Cập nhật chức vụ thành công" /> : null}
            {notificationDeleteSuccess ? <AppToaster title="Thông báo" content="Xóa chức vụ thành công" /> : null}
        </>
    )
}

export default Positions