import { CCloseButton, COffcanvas, COffcanvasBody, COffcanvasHeader, COffcanvasTitle } from '@coreui/react'
import React from 'react'

const AdvancedFilters = ({ visible, setVisible }) => {
    return (
        <COffcanvas scroll placement="top" visible={visible} onHide={() => setVisible(false)}>
            <COffcanvasHeader>
                <COffcanvasTitle>Offcanvas</COffcanvasTitle>
                <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
            </COffcanvasHeader>
            <COffcanvasBody>
                Content for the offcanvas goes here. You can place just about any Bootstrap component or
                custom elements here.
            </COffcanvasBody>
        </COffcanvas>
    )
}

export default AdvancedFilters