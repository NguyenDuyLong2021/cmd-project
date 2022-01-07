import { CButton, CCard, CCardBody, CCardHeader, CForm, CFormFeedback, CFormInput, CFormLabel, CFormSwitch, CListGroupItem, CModal, CModalBody, CModalHeader, CModalTitle } from "@coreui/react"
import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDepartmentsRequest } from "../../../actions/departmentsAction"
import { addEmployeeRequest, updateEmployeeRequest } from "../../../actions/employeesAction"
import AppToaster from "../../../components/AppToaster"
import useOnClickOutside from "../../../customHooks/useOnClickOutside"
import SelectDepartment from "./SelectDepartment"
import SelectPosition from "./SelectPosition"

const FormSubmitEmployee = ({ visible, setVisible, employee = null }) => {
    /* Quản lý các state */
    const [info, setInfo] = useState({
        // State lưu thông tin của nhân viên khi người dùng nhập dữ liệu
        code: "",
        name: "",
        dob: "",
        email: "",
        phone: "",
        department: {
            id: "",
            name: "",
            code: ""
        },
        position: {
            id: "",
            name: ""
        },
        user: {
            username: "",
            password: "",
        }
    })
    const departments = useSelector(state => state.departments.data)
    const dispatch = useDispatch()

    const [visibleDepartment, setVisibleDepartment] = useState(false) // State quản lý hiển thị danh sách phòng ban để người dùng chọn
    const [visiblePosition, setVisiblePosition] = useState(false) // State quản lý hiển thị danh sách chức vụ để người dùng chọn
    const [visibleLogin, setVisibleLogin] = useState(false) // State quản lý hiển thị nhập tên đăng và mật khẩu nếu cho phép đăng nhập
    const [notificationAddSuccess, setNotificationAddSuccess] = useState(false) // State quản lý hiển thị thông báo thêm nhân viên thành công
    const [notificationUpdateSuccess, setNotificationUpdateSuccess] = useState(false) // State quản lý hiển thị thông báo cập nhật thông tin nhân viên thành công
    //

    /* Quản lý các ref */
    const refSelectDepartment = useRef()
    const refSelectPosition = useRef()
    //

    /* Hàm xử lý đóng các Dropdown khi click ra ngoài */
    useOnClickOutside(refSelectDepartment, () => setVisibleDepartment(false))
    useOnClickOutside(refSelectPosition, () => setVisiblePosition(false))
    //

    useEffect(() => {
        if (employee?.id) {
            setInfo({
                ...employee,
                user: (employee?.user !== null) ? employee.user : { username: "", password: "" }
            })
            if (employee?.user?.username) {
                setVisibleLogin(true)
            }
        }
    }, [employee])

    /* Các hàm thay đổi giá trị của state info mỗi khi người dùng nhập/chọn dữ liệu mới */
    const handleInputChange = (e) => {
        if (e.target.type === "checkbox") {
            if (e.target.checked) {
                setInfo({
                    ...info,
                    user: null
                })
            }
            else {
                setInfo({
                    ...info,
                    user: {
                        username: "",
                        password: ""
                    }
                })
            }
            setVisibleLogin(e.target.checked)
        }
        else {
            setInfo({
                ...info,
                [e.target.name]: e.target.value
            })
        }
    }
    const handleDepartmentChange = (department) => {
        setVisibleDepartment(false);
        setInfo({
            ...info,
            department,
            position: {
                id: "",
                name: ""
            },
        })
    }
    const handlePositionChange = (position) => {
        setVisiblePosition(false);
        setInfo({
            ...info,
            position
        })
    }
    const handleUserChange = (e) => {
        setInfo({
            ...info,
            user: {
                ...info.user,
                [e.target.name]: e.target.value
            }
        })
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
            if (info.id) {
                dispatch(updateEmployeeRequest(info))
                setNotificationUpdateSuccess(true)
            }
            else {
                dispatch(addEmployeeRequest(info))
                setNotificationAddSuccess(true)
            }
            setVisible(false)
        }
    }
    //

    //
    let SelectPositionElement = null
    if (visiblePosition) {
        if (info.department?.id && !info.department?.positions.length) {
            SelectPositionElement = <CListGroupItem className="bg-light" align="center">Phòng ban hiện chưa có chức vụ nào!</CListGroupItem>
        }
        else if (!info.department.id) {
            SelectPositionElement = <CListGroupItem className="bg-light" align="center">Chưa chọn phòng ban!</CListGroupItem>
        }
        else {
            SelectPositionElement = <SelectPosition
                visible={visiblePosition}
                currentPosition={info.position}
                data={info.department.positions}
                onPositionChange={handlePositionChange}
            />
        }
    }

    return (
        <>
            <CModal
                size="xl"
                scrollable
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <CModalHeader>
                    <CModalTitle>
                        {employee?.id ? "CHỈNH SỬA NHÂN VIÊN" : "THÊM NHÂN VIÊN MỚI"}
                    </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CForm
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-3">
                            <CFormLabel htmlFor="code">Mã nhân viên:</CFormLabel>
                            <CFormInput
                                type="text"
                                name="code"
                                placeholder="Nhập mã nhân viên..."
                                value={info.code}
                                onChange={handleInputChange}
                                required
                            />
                            <CFormFeedback invalid>
                                Vui lòng nhập mã nhân viên.
                            </CFormFeedback>
                        </div>
                        <hr />
                        <div className="mb-3">
                            <CFormLabel htmlFor="name">Họ và tên:</CFormLabel>
                            <CFormInput
                                type="text"
                                name="name"
                                placeholder="Nhập họ và tên nhân viên..."
                                value={info.name}
                                onChange={handleInputChange}
                                required
                            />
                            <CFormFeedback invalid>
                                Vui lòng nhập họ và tên nhân viên.
                            </CFormFeedback>
                        </div>
                        <hr />
                        <div className="mb-3">
                            <CFormLabel htmlFor="dob">Ngày sinh:</CFormLabel>
                            <CFormInput
                                type="date"
                                name="dob"
                                placeholder="Nhập ngày sinh..."
                                value={info.dob || ""}
                                onChange={handleInputChange}
                                required
                            />
                            <CFormFeedback invalid>
                                Vui lòng nhập ngày sinh.
                            </CFormFeedback>
                        </div>
                        <hr />
                        <div className="mb-3">
                            <CFormLabel htmlFor="email">Email:</CFormLabel>
                            <CFormInput
                                type="email"
                                name="email"
                                placeholder="Nhập email nhân viên..."
                                value={info.email}
                                onChange={handleInputChange}
                                required
                            />
                            <CFormFeedback invalid>
                                Vui lòng nhập email.
                            </CFormFeedback>
                        </div>
                        <hr />
                        <div className="mb-3">
                            <CFormLabel htmlFor="phone">Số điện thoại:</CFormLabel>
                            <CFormInput
                                type="number"
                                name="phone"
                                placeholder="Nhập số điện thoại của nhân viên..."
                                value={info.phone}
                                onChange={handleInputChange}
                                required
                            />
                            <CFormFeedback invalid>
                                Vui lòng nhập số điện thoại.
                            </CFormFeedback>
                        </div>
                        <hr />
                        <div className="mb-3">
                            <CFormLabel htmlFor="department">Phòng ban:</CFormLabel>
                            <div ref={refSelectDepartment}>
                                <CFormInput
                                    type="text"
                                    name="department"
                                    placeholder="Chọn phòng ban của nhân viên..."
                                    value={info.department?.name}
                                    onChange={handleInputChange}
                                    onClick={() => setVisibleDepartment(!visibleDepartment)}
                                    required
                                />
                                <CFormFeedback invalid>
                                    Vui lòng chọn phòng ban.
                                </CFormFeedback>
                                <SelectDepartment
                                    visible={visibleDepartment}
                                    currentDepartment={info.department}
                                    departments={departments}
                                    onDepartmentChange={handleDepartmentChange}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="mb-3">
                            <CFormLabel htmlFor="position">Chức vụ:</CFormLabel>
                            <div ref={refSelectPosition}>
                                <CFormInput
                                    type="text"
                                    name="position"
                                    placeholder="Chọn chức vụ của nhân viên..."
                                    value={info.position?.name}
                                    onChange={handleInputChange}
                                    onClick={() => setVisiblePosition(!visiblePosition)}
                                    required
                                />
                                {SelectPositionElement}
                                <CFormFeedback invalid>
                                    Vui lòng chọn chức vụ.
                                </CFormFeedback>
                            </div>
                        </div>
                        <hr />
                        <CCard>
                            <CCardBody>
                                <CCardHeader>
                                    <CFormSwitch
                                        label="Cho phép đăng nhập"
                                        checked={visibleLogin}
                                        onChange={handleInputChange}
                                    />
                                </CCardHeader>
                                {(visibleLogin) ? (
                                    <>
                                        <div className="mb-3">
                                            <CFormLabel htmlFor="username" className="mt-3">Tên đăng nhập:</CFormLabel>
                                            <CFormInput
                                                type="text"
                                                name="username"
                                                placeholder="Nhập tên đăng nhập..."
                                                value={info.user?.username || ""}
                                                onChange={handleUserChange}
                                                required
                                            />
                                            <CFormFeedback invalid>
                                                Vui lòng nhập tên đăng nhập.
                                            </CFormFeedback>
                                        </div>
                                        {((employee?.id && employee?.user.username === "" && employee?.user.password === "") || !employee) ? (
                                            <>
                                                <hr />
                                                <div className="mb-3">
                                                    <CFormLabel htmlFor="password">Mật khẩu:</CFormLabel>
                                                    <CFormInput
                                                        type="password"
                                                        name="password"
                                                        placeholder="Nhập mật khẩu..."
                                                        value={info.user?.password || ""}
                                                        onChange={handleUserChange}
                                                        required
                                                    />
                                                    <CFormFeedback invalid>
                                                        Vui lòng nhập mật khẩu.
                                                    </CFormFeedback>
                                                </div>
                                            </>
                                        ) : null}

                                    </>
                                ) : null}
                            </CCardBody>
                        </CCard>
                        <hr />
                        <>
                            <CButton
                                className="d-table m-auto"
                                size="lg"
                                type="submit"
                            >
                                {(employee?.id) ? "Cập nhật thông tin" : "Xác nhận tạo mới"}
                            </CButton>
                        </>
                    </CForm>
                </CModalBody>
            </CModal>
            {(notificationAddSuccess) ? (
                <AppToaster content="Thêm nhân viên thành công" />
            ) : null}
            {(notificationUpdateSuccess) ? (
                <AppToaster content="Cập nhật thông tin nhân viên thành công" />
            ) : null}
        </>
    )
}

export default FormSubmitEmployee