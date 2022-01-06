import { CDropdownItem } from '@coreui/react'
import React, { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import FormSubmitDepartment from './FormSubmitDepartment'

const EditDepartment = ({ department }) => {
    const [visibleEdit, setVisibleEdit] = useState(false)
    return (
        <>
            <CDropdownItem
                component="button"
                onClick={() => setVisibleEdit(!visibleEdit)}
            >
                <BiEdit /> Chỉnh sửa
            </CDropdownItem>
            <FormSubmitDepartment visible={visibleEdit} setVisible={setVisibleEdit} department={department} />
        </>
    )
}

export default EditDepartment