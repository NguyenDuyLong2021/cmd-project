import { CButton, CCard, CCardBody, CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../actions/employeesAction'
import AppPagination from '../../components/AppPagination'
import EmployeeItem from './EmployeeItem'
import AddEmployee from './SubmitEmployee/AddEmployee'
import ButtonShowDepartments from './departments/ButtonShowDepartments'
import AppSearch from '../../components/AppSearch'
import ButtonShowRoles from './roles/ButtonShowRoles'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'

const queryString = require('query-string')

const Employees = () => {
    const employees = useSelector(state => state.employees.data)
    const pagination = useSelector(state => state.employees.pagination)

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
        document.title = "Nhân viên - Cảnh Báo Sớm"
    }, [])
    useEffect(() => {
        const requestUrl = location.pathname + "?" + queryString.stringify(filters)
        navigation(requestUrl)
        dispatch(actions.fetchEmployeesRequest(filters))
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
                    DANH SÁCH NHÂN VIÊN
                </div>
                <div className="row justify-content-end col">
                    <div className="col-auto">
                        <AppSearch value={filters.q} onSearch={handleSearchTerm} />
                    </div>
                    <div className="col-auto">
                        <ButtonShowDepartments />
                    </div>
                    <div className="col-auto">
                        <ButtonShowRoles />
                    </div>
                    <div className="col-auto">
                        <AddEmployee />
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
                                        onClick={() => handleSort("name")}
                                    >
                                        <span className="fw-bolder">
                                            HỌ VÀ TÊN {filters._sort === "name" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "name" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                                        </span>
                                    </CButton>
                                </CTableHeaderCell>
                                <CTableHeaderCell>
                                    <CButton
                                        color="none"
                                        onClick={() => handleSort("dob")}
                                    >
                                        <span className="fw-bolder">
                                            NGÀY SINH {filters._sort === "dob" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "dob" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                                        </span>
                                    </CButton>
                                </CTableHeaderCell>
                                <CTableHeaderCell>
                                    <CButton
                                        color="none"
                                        onClick={() => handleSort("email")}
                                    >
                                        <span className="fw-bolder">
                                            EMAIL {filters._sort === "email" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "email" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                                        </span>
                                    </CButton>
                                </CTableHeaderCell>
                                <CTableHeaderCell>
                                    <CButton
                                        color="none"
                                        onClick={() => handleSort("phone")}
                                    >
                                        <span className="fw-bolder">
                                            SĐT {filters._sort === "phone" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "phone" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                                        </span>
                                    </CButton>
                                </CTableHeaderCell>
                                <CTableHeaderCell>
                                    <CButton
                                        color="none"
                                        onClick={() => handleSort("department.name")}
                                    >
                                        <span className="fw-bolder">
                                            PHÒNG BAN {filters._sort === "department.name" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "department.name" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                                        </span>
                                    </CButton>
                                </CTableHeaderCell>
                                <CTableHeaderCell>
                                    <CButton
                                        color="none"
                                        onClick={() => handleSort("position.name")}
                                    >
                                        <span className="fw-bolder">
                                            CHỨC VỤ {filters._sort === "position.name" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "position.name" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                                        </span>
                                    </CButton>
                                </CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {
                                employees.map(employee => (
                                    <EmployeeItem key={employee.id} employee={employee} />
                                ))
                            }
                        </CTableBody>
                    </CTable>
                    {employees.length === 0 ? (
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

export default Employees