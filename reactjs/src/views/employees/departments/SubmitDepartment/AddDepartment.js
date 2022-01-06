import { CButton } from '@coreui/react'
import React, { useState } from 'react'
import FormSubmitDepartment from './FormSubmitDepartment'

const AddDepartment = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CButton
                color="primary"
                className="d-block m-auto"
                onClick={() => setVisible(!visible)}
            >
                Tạo mới
            </CButton>
            <FormSubmitDepartment visible={visible} setVisible={setVisible} />
        </>
    )
}

export default AddDepartment