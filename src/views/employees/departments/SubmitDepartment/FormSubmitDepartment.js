import { CButton, CForm, CFormFeedback, CFormInput, CFormLabel, CFormTextarea, CModal, CModalBody, CModalFooter, CModalTitle } from "@coreui/react"
import React, { useEffect, useRef, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../../../actions/departmentsAction"
import AppToaster from "../../../../components/AppToaster"
import useOnClickOutside from "../../../../customHooks/useOnClickOutside"
import SelectDepartment from "../../SubmitEmployee/SelectDepartment"

const FormSubmitDepartment = ({ visible, setVisible, department = null }) => {
    const departments = useSelector(state => state.departments)
    const dispatch = useDispatch()

    /* Quản lý các state */
    const [info, setInfo] = useState({
        // State lưu thông tin của phòng ban khi người dùng nhập dữ liệu
        code: "",
        name: "",
        description: "",
        parent_id: null,
        positions: []
    })
    const [visibleDepartment, setVisibleDepartment] = useState(false)
    const [currentParentDepartmentName, setCurrentParentDepartmentName] = useState("")
    const [notificationAddSuccess, setNotificationAddSuccess] = useState(false) // State quản lý hiển thị thông báo thêm phòng ban thành công
    const [notificationUpdateSuccess, setNotificationUpdateSuccess] = useState(false) // State quản lý hiển thị thông báo cập nhật thông tin phòng ban thành công
    //

    /* Quản lý các ref */
    const refSelectDepartment = useRef()
    //

    /* Hàm xử lý đóng các Dropdown khi click ra ngoài */
    useOnClickOutside(refSelectDepartment, () => setVisibleDepartment(false))
    //

    useEffect(() => {
        dispatch(actions.fetchDepartmentsRequest())
    }, [])
    useEffect(() => {
        if (department?.id) {
            setInfo(department)
            setCurrentParentDepartmentName(departments.find(dp => dp.id === department.parent_id)?.name || "")
        }
    }, [department])

    /* Các hàm thay đổi giá trị của state info mỗi khi người dùng nhập/chọn dữ liệu mới */
    const handleInputChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }
    const handleDepartmentChange = (department) => {
        setVisibleDepartment(false)
        setCurrentParentDepartmentName(department.name)
        setInfo({
            ...info,
            parent_id: department.id
        })
    }
    const handleChangeParrent = (e) => {
        setCurrentParentDepartmentName(e.target.value)
    }
    //

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
            if (info.parent_id === "") {
                setInfo({
                    ...info,
                    parent_id: null
                })
            }
            if (info.id) {
                dispatch(actions.updateDepartmentRequest(info))
                setNotificationUpdateSuccess(true)
            }
            else {
                dispatch(actions.addDepartmentRequest(info))
                setNotificationAddSuccess(true)
            }
            setVisible(false)
        }
    }
    //

    const currentDepartment = departments.find(dp => dp.id === info.parent_id)
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
                            {department?.id ? "CHỈNH SỬA PHÒNG BAN" : "THÊM PHÒNG BAN MỚI"}
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
                        <div className="mb-3">
                            <CFormLabel htmlFor="code">Mã phòng ban:</CFormLabel>
                            <CFormInput
                                type="text"
                                name="code"
                                placeholder="Nhập mã phòng ban..."
                                value={info.code}
                                onChange={handleInputChange}
                                required
                            />
                            <CFormFeedback invalid>
                                Vui lòng nhập mã phòng ban.
                            </CFormFeedback>
                        </div>
                        <hr />
                        <div className="mb-3">
                            <CFormLabel htmlFor="name">Tên phòng ban:</CFormLabel>
                            <CFormInput
                                type="text"
                                name="name"
                                placeholder="Nhập tên phòng ban..."
                                value={info.name}
                                onChange={handleInputChange}
                                required
                            />
                            <CFormFeedback invalid>
                                Vui lòng nhập tên phòng ban.
                            </CFormFeedback>
                        </div>
                        <hr />
                        <div className="mb-3">
                            <CFormLabel htmlFor="email">Mô tả:</CFormLabel>
                            <CFormTextarea
                                type="text"
                                rows={5}
                                name="description"
                                placeholder="Nhập mô tả phòng ban..."
                                value={info.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <hr />
                        <div className="mb-3">
                            <CFormLabel htmlFor="department">Phòng ban cha:</CFormLabel>
                            <div ref={refSelectDepartment}>
                                <CFormInput
                                    type="text"
                                    placeholder="Chọn phòng ban cha..."
                                    value={currentParentDepartmentName}
                                    onChange={handleChangeParrent}
                                    onClick={() => setVisibleDepartment(!visibleDepartment)}
                                />
                                <CFormFeedback invalid>
                                    Vui lòng chọn phòng ban cha.
                                </CFormFeedback>
                                <SelectDepartment
                                    visible={visibleDepartment}
                                    currentDepartment={currentDepartment}
                                    departments={departments}
                                    onDepartmentChange={handleDepartmentChange}
                                />
                            </div>
                        </div>
                        <CModalFooter>
                            <CButton
                                className="d-table m-auto"
                                size="lg"
                                type="submit"
                            >
                                {(department?.id) ? "Cập nhật thông tin" : "Xác nhận tạo mới"}
                            </CButton>
                        </CModalFooter>
                    </CForm>
                </CModalBody>
            </CModal>

            {(notificationAddSuccess) ? (
                <AppToaster content="Thêm phòng ban thành công" />
            ) : null}
            {(notificationUpdateSuccess) ? (
                <AppToaster content="Cập nhật thông tin phòng ban thành công" />
            ) : null}
        </>
    )
}

export default FormSubmitDepartment
