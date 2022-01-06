import { CDropdownItem } from '@coreui/react'
import React, { useState } from 'react'
import { BsJournalMedical } from 'react-icons/bs'
import Positions from './Positions'

const ButtonShowPositions = ({ department }) => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CDropdownItem
                component="button"
                onClick={() => setVisible(!visible)}
            >
                <BsJournalMedical /> Chức vụ
            </CDropdownItem>
            <Positions visible={visible} setVisible={setVisible} department={department} />
        </>
    )
}

export default ButtonShowPositions