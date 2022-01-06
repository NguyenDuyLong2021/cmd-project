import { CCard, CCardBody } from '@coreui/react'
import React from 'react'
import { useParams } from 'react-router-dom'

const Info = () => {
    const params = useParams()
    console.log(params)
    return (
        <CCard>
            <CCardBody>
                {params.id}
            </CCardBody>
        </CCard>
    )
}

export default Info