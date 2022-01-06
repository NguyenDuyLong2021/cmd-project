import { CAccordion, CAccordionItem, CButton, CModal, CModalBody, CModalFooter, CModalTitle } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../actions/rolesAction'
import rolesApi from '../../../api/rolesApi'
import AppPagination from '../../../components/AppPagination'
import AppSearch from '../../../components/AppSearch'
import RoleItem from './RoleItem'
import AddRole from './SubmitRole/AddRole'

const Roles = ({ visible, setVisible }) => {
    const roles = useSelector(state => state.roles)
    const dispatch = useDispatch()

    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 0
    })
    const [filters, setFilters] = useState({
        _page: 1,
        _litmit: 10,
        q: ""
    })

    useEffect(() => {
        document.title = "Vai trò - Cảnh Báo Sớm"
        rolesApi.getAll()
            .then((response) => {
                setPagination({
                    ...pagination,
                    _totalRows: response.data.length
                })
            })
    }, [])
    useEffect(() => {
        dispatch(actions.fetchRolesRequest(filters))
    }, [filters])

    const handlePageChange = newPage => {
        setFilters({
            ...filters,
            _page: newPage
        })
        setPagination({
            ...pagination,
            _page: newPage
        })
    }
    const handleSearchTerm = (searchTerm) => {
        setFilters({
            ...filters,
            _page: 1,
            q: searchTerm
        })
    }
    return (
        <>
            <CModal
                fullscreen
                scrollable
                visible={visible}
                onClose={() => setVisible(false)}
            >
                <div className="modal-header row justify-content-between">
                    <div className="col">
                        <CModalTitle>VAI TRÒ</CModalTitle>
                    </div>
                    <div className="col-auto">
                        <CButton color="none" onClick={() => setVisible(false)}>
                            <AiOutlineClose className="fs-4" />
                        </CButton>
                    </div>
                    <hr className="mt-3" />
                    <div className="row align-content-between justify-content-between bg-light p-3">
                        <div className="col">
                            <AppSearch onSearch={handleSearchTerm} />
                        </div>
                        <div className="col-auto">
                            <AddRole />
                        </div>
                    </div>
                </div>
                <CModalBody>
                    <CAccordion flush alwaysOpen>
                        {
                            roles.map(role => (
                                <CAccordionItem itemKey={role.id} key={role.id}>
                                    <RoleItem role={role} />
                                </CAccordionItem>
                            ))
                        }
                    </CAccordion>
                </CModalBody>
                <CModalFooter className="justify-content-center">
                    <AppPagination
                        pagination={pagination}
                        onPageChange={handlePageChange}
                    />
                </CModalFooter>
            </CModal>
        </>
    )
}

export default Roles