import React, { useRef, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

/*
    Component này có thể được sử dụng lại ở bất cứ đâu
    Truyền vào 2 props:
    1. value: giá trì tìm kiếm hiện tại
    2. onPageChange: một function được truyền vào tham số searchTerm là cụm từ mới được tìm kiếm
*/
const AppSearch = ({ value, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("")
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
        <InputGroup>
            <InputGroup.Text type="button" onClick={() => {
                onSearch("")
                setSearchTerm("")
            }}>x</InputGroup.Text>
            <Form.Control ref={typingTimeoutRef} type="text" placeholder="Tìm kiếm..." value={searchTerm || value} onChange={handleSearchTerm} />
        </InputGroup>
    )
}

export default AppSearch