import { CFormInput, CInputGroup, CInputGroupText } from '@coreui/react'
import React, { useRef, useState } from 'react'

const AppSearch = ({ value = "", onSearch }) => {
    const [searchTerm, setSearchTerm] = useState(value)
    const typingTimeoutRef = useRef(null)
    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(() => {
            onSearch(e.target.value)
        }, 250)
    }
    return (
        <CInputGroup>
            <CInputGroupText component="button" onClick={() => {
                onSearch("")
                setSearchTerm("")
            }}>x</CInputGroupText>
        <CFormInput ref={typingTimeoutRef} type="text" placeholder="Tìm kiếm..." value={searchTerm || value} onChange={handleSearchTerm} />
        </CInputGroup>
    )
}

export default AppSearch