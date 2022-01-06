import { CButton } from '@coreui/react'
import React, { useState } from 'react'
import Roles from './Roles'

const ButtonShowRoles = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CButton
                color="primary"
                variant="outline"
                onClick={() => setVisible(!visible)}
            >
                <span className="fw-bolder">
                    Vai trò
                </span>
            </CButton>
            <Roles visible={visible} setVisible={setVisible} />
        </>
    )
}

export default ButtonShowRoles