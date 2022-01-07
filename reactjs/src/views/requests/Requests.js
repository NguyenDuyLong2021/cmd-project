import { CButton, CCard, CCardBody, CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../actions/requestsAction'
import AppPagination from '../../components/AppPagination'
import RequestItem from './RequestItem'
import AddRequest from './SubmitRequest/AddRequest'
import AppSearch from '../../components/AppSearch'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import ButtonShowAdvancedFilters from './AdvancedFilters/ButtonShowAdvancedFilters'

const queryString = require('query-string')

const Requests = () => {
    const requests = useSelector(state => state.requests.data)
    const pagination = useSelector(state => state.requests.pagination)

    const dispatch = useDispatch()
    const location = useLocation()
    const navigation = useNavigate()
    
    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 10,
        q: "",
        _sort: null,
        _order: null
    })

    useEffect(() => {
        if (location.search.length > 0) {
            const params = queryString.parse(location.search)
            setFilters({
                ...filters,
                ...params
            })
        }
    }, [])
    useEffect(() => {
        document.title = "Đề xuất - Cảnh Báo Sớm"
    }, [])
    useEffect(() => {
        const requestUrl = location.pathname + "?" + queryString.stringify(filters)
        navigation(requestUrl)
        dispatch(actions.fetchRequestsRequest(filters))
    }, [filters])

    const handlePageChange = newPage => {
        setFilters({
            ...filters,
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
    const handleSort = (sortBy) => {
        if (filters._order === null) {
            setFilters({
                ...filters,
                _sort: sortBy,
                _order: "asc"
            })
        }
        else if (filters._order === "asc") {
            setFilters({
                ...filters,
                _sort: sortBy,
                _order: "desc"
            })
        }
        else {
            setFilters({
                ...filters,
                _sort: null,
                _order: null
            })
        }
    }

    return (
        <>
            <div className="row justify-content-between">
                <div className="col-auto fw-bold fs-5">
                    DANH SÁCH ĐỀ XUẤT
                </div>
                <div className="row justify-content-end col">
                    <div className="col-auto">
                        <AppSearch value={filters.q} onSearch={handleSearchTerm} />
                    </div>
                    <div className="col-auto">
                        <ButtonShowAdvancedFilters />
                    </div>
                    <div className="col-auto">
                        <AddRequest />
                    </div>
                </div>
            </div>
            <hr />
            <CCard>
                <CCardBody>
                    <CTable
                        striped
                        hover
                        responsive
                        borderless
                        align="middle"
                    >
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell></CTableHeaderCell>
                                <CTableHeaderCell>
                                    <CButton
                                        color="none"
                                        onClick={() => handleSort("requester.name")}
                                    >
                                        <span className="fw-bolder">
                                            NGƯỜI ĐỀ XUẤT {filters._sort === "requester.name" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "requester.name" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                                        </span>
                                    </CButton>
                                </CTableHeaderCell>
                                <CTableHeaderCell>
                                    <CButton
                                        color="none"
                                        onClick={() => handleSort("reqtype.name")}
                                    >
                                        <span className="fw-bolder">
                                            LOẠI ĐỀ XUẤT {filters._sort === "reqtype.name" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "reqtype.name" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                                        </span>
                                    </CButton>
                                </CTableHeaderCell>
                                <CTableHeaderCell>
                                    <CButton
                                        color="none"
                                        onClick={() => handleSort("request_reason")}
                                    >
                                        <span className="fw-bolder">
                                            MỤC ĐÍCH/LÝ DO {filters._sort === "request_reason" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "request_reason" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                                        </span>
                                    </CButton>
                                </CTableHeaderCell>
                                <CTableHeaderCell>
                                    <CButton
                                        color="none"
                                        onClick={() => handleSort("created_at")}
                                    >
                                        <span className="fw-bolder">
                                            NGÀY TẠO {filters._sort === "created_at" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "created_at" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                                        </span>
                                    </CButton>
                                </CTableHeaderCell>
                                <CTableHeaderCell>
                                    <CButton
                                        color="none"
                                        onClick={() => handleSort("reqtype.statuses[0].name")}
                                    >
                                        <span className="fw-bolder">
                                            TRẠNG THÁI {filters._sort === "reqtype.statuses[0].name" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "reqtype.statuses[0].name" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                                        </span>
                                    </CButton>
                                </CTableHeaderCell>
                                <CTableHeaderCell>
                                </CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {
                                requests.map(request => (
                                    <RequestItem key={request.id} request={request} />
                                ))
                            }
                        </CTableBody>
                    </CTable>
                    {requests.length === 0 ? (
                        <CCardBody align="center">
                            Không có dữ liệu
                        </CCardBody>
                    ) : null}
                    <AppPagination
                        pagination={pagination}
                        onPageChange={handlePageChange}
                    />
                </CCardBody>
            </CCard>
        </>
    )
}

export default Requests