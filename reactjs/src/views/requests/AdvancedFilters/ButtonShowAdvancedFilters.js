import { CButton } from '@coreui/react'
import React, { useState } from 'react'
import AdvancedFilters from './AdvancedFilters'

const ButtonShowAdvancedFilters = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CButton
                color="primary"
                variant="outline"
                onClick={() => setVisible(!visible)}
            >
                <span className="fw-bolder">
                    Bộ lọc
                </span>
            </CButton>
            <AdvancedFilters visible={visible} setVisible={setVisible} />
        </>
    )
}

export default ButtonShowAdvancedFilters