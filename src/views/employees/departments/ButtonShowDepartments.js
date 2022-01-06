import { CButton } from '@coreui/react'
import React, { useState } from 'react'
import Departments from './Departments'

const ButtonShowDepartments = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CButton
                color="primary"
                variant="outline"
                onClick={() => setVisible(!visible)}
            >
                <span className="fw-bolder">
                Phòng ban - Chức vụ
                </span>
            </CButton>
            <Departments visible={visible} setVisible={setVisible} />
        </>
    )
}

export default ButtonShowDepartments