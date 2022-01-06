import { CDropdownItem } from '@coreui/react'
import React from 'react'
import { useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import FormSubmitEmployee from './FormSubmitEmployee'

const EditEmployee = ({ employee }) => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CDropdownItem
                component="button"
                onClick={() => setVisible(!visible)}
            >
                <BiEdit /> Chỉnh sửa
                <FormSubmitEmployee visible={visible} setVisible={setVisible} employee={employee} />
            </CDropdownItem>
        </>
    )
}

export default EditEmployee