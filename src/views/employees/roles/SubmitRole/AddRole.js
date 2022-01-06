import { CButton } from '@coreui/react'
import React, { useState } from 'react'
import FormSubmitRole from './FormSubmitRole'

const AddRole = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CButton
                color="primary"
                onClick={() => setVisible(!visible)}
            >
                Tạo mới
            </CButton>
            <FormSubmitRole visible={visible} setVisible={setVisible} />
        </>
    )
}

export default AddRole