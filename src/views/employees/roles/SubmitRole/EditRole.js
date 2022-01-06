import { CButton } from '@coreui/react'
import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import FormSubmitRole from './FormSubmitRole'

const EditRole = ({ role }) => {
    const [visibleEdit, setVisibleEdit] = useState(false)
    return (
        <>
            <CButton
                color="warning"
                className="col-4 text-white"
                onClick={() => setVisibleEdit(true)}
            >
                <BiEdit /> <span className="ps-1">Chỉnh sửa</span>
            </CButton>
            <FormSubmitRole visible={visibleEdit} setVisible={setVisibleEdit} role={role} />
        </>
    )
}

export default EditRole