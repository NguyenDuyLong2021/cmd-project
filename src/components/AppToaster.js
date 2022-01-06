import { CToast, CToastBody, CToaster, CToastHeader } from '@coreui/react'
import React, { useEffect, useRef, useState } from 'react'

const AppToaster = ({ content }) => {
    const [toast, addToast] = useState(0)
    const timeNow = new Date()
    const strDateTime = "Vào lúc " + timeNow.getHours() + ":" + timeNow.getMinutes() + ", ngày " + timeNow.getDate() + "/" + (timeNow.getMonth() + 1) + "/" + timeNow.getFullYear()
    const toaster = useRef()
    const Toast = (
        <CToast autohide={true} delay={10000}>
            <CToastHeader closeButton>
                <svg
                    className="rounded me-2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                >
                    <rect width="100%" height="100%" fill="#2b59b2"></rect>
                </svg>
                <strong className="me-auto">Thông báo</strong>
                <small>{strDateTime}</small>
            </CToastHeader>
            <CToastBody>{content}</CToastBody>
        </CToast>
    )
    useEffect(() => {
        addToast(Toast)
    }, [])
    return (
        <>
            <CToaster ref={toaster} push={toast} placement="top-end" />
        </>
    )
}

export default React.memo(AppToaster)