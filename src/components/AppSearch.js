import { CFormInput } from '@coreui/react'
import React, { useRef, useState } from 'react'

const AppSearch = ({ value, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState(value)
    const typingTimeoutRef = useRef(null)
    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(() => {
            onSearch(e.target.value)
        }, 1000)
    }
    return (
        <CFormInput ref={typingTimeoutRef} type="text" placeholder="Tìm kiếm..." value={searchTerm} onChange={handleSearchTerm} />
    )
}

export default AppSearch