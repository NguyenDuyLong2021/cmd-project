import { CButton } from '@coreui/react'
import React, { useState } from 'react'
import FormSubmitEmployee from './FormSubmitEmployee'

const AddEmployee = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CButton
                color="primary"
                className="text-white"
                onClick={() => setVisible(!visible)}
            >
                Tạo mới nhân viên
            </CButton>
            <FormSubmitEmployee visible={visible} setVisible={setVisible} />
            
        </>
    )
}

export default AddEmployee

// import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
// import React, { useState } from 'react'
// import FormSubmitEmployee from './FormSubmitEmployee'

// const AddEmployee = () => {
//     const [visible, setVisible] = useState(false)
//     const [visibleWarning, setVisibleWarning] = useState(false)
    
//     const handleInputedAndClose = (isInput) => {
//         if (isInput) {
//             setVisibleWarning(true)
//         }
//     }
//     console.log(visible)
//     return (
//         <>
//             <CButton
//                 color="primary"
//                 onClick={() => setVisible(!visible)}
//             >
//                 Tạo mới nhân viên
//             </CButton>
//             <CModal
//                 size="xl"
//                 scrollable
//                 visible={visible}
//                 onClose={() => handleInputedAndClose(true)}
//             >
//                 <CModalHeader>
//                     <CModalTitle>TẠO MỚI NHÂN VIÊN</CModalTitle>
//                 </CModalHeader>
//                 <CModalBody>
//                     <FormSubmitEmployee />
//                 </CModalBody>
//             </CModal>
//             <CModal
//                 scrollable
//                 visible={visibleWarning}
//                 backdrop="static"
//                 onClose={() => {
//                     setVisibleWarning(false)
//                     setVisible(true)
//                 }}
//             >
//                 <CModalHeader>
//                     <CModalTitle>XÁC NHẬN THOÁT</CModalTitle>
//                 </CModalHeader>
//                 <CModalBody>
//                          Những thay đổi dữ liệu sẽ không được lưu. Bạn có chắc muốn thoát?
//                 </CModalBody>
//                 <CModalFooter>
//                     <CButton
//                         color="secondary"
//                         onClick={() => {
//                             setVisibleWarning(false)
//                             setVisible(true)
//                         }}
//                     >
//                         Hủy
//                     </CButton>
//                     <CButton
//                         className="bg-danger"
//                         onClick={() => {
//                             setVisibleWarning(false)
//                             setVisible(false)
//                         }}
//                     >
//                         Đồng ý
//                     </CButton>
//                 </CModalFooter>
//             </CModal>
//         </>
//     )
// }

// export default AddEmployee