import { CListGroup, CListGroupItem } from '@coreui/react'
import React from 'react'

const SelectPosition = ({ visible, currentPosition, data = [], onPositionChange }) => {
    // Chuỗi lệnh hiển thị tên phòng ban phân cấp
    const showPosition = data.map((postition) => (
        <CListGroupItem
            component="button"
            key={postition.id}
            onClick={() => onPositionChange(postition)}
            active={currentPosition.name === postition.name}
        >
            {postition.name}
        </CListGroupItem>
    ))
    //

    return (
        <CListGroup>
            {(visible) ? showPosition : null}
        </CListGroup>
    )
}

export default SelectPosition