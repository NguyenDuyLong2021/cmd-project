import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap'
import * as actions from '../../actions/employeesAction'
import AppPagination from '../../components/AppPagination'
import EmployeeItem from './EmployeeItem'
import AddEmployee from './SubmitEmployee/AddEmployee'
import ButtonShowDepartments from './departments/ButtonShowDepartments'
import AppSearch from '../../components/AppSearch'
import ButtonShowRoles from './roles/ButtonShowRoles'
import { BiArrowFromTop } from 'react-icons/bi'

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
        _sort: null,
        _order: null
    })

    useEffect(() => {
        document.title = "Nhân viên - Cảnh Báo Sớm"
        if (location.search.length > 0) {
            const params = queryString.parse(location.search)
            setFilters({
                ...filters,
                ...params
            })
        }
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
    const handleFilter = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
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
            <div className="row justify-content-xl-between justify-content-end align-items-center">
                <div className="col-auto fw-bold fs-5 mb-xl-0 mb-3">
                    DANH SÁCH NHÂN VIÊN
                </div>
                <div className="col" />
                <div className="col-auto mb-xl-0 mb-3 d-sm-block d-none">
                    <AppSearch value={filters.q} onSearch={handleSearchTerm} />
                </div>
                <div className="col-auto mb-xl-0 mb-3 d-sm-block d-none">
                    <ButtonShowDepartments />
                </div>
                <div className="col-auto mb-xl-0 mb-3 d-sm-block d-none">
                    <ButtonShowRoles />
                </div>
                <div className="col-auto mb-xl-0 mb-3 d-sm-block d-none">
                    <AddEmployee />
                </div>
                <Dropdown autoClose="outside" className="col-auto d-sm-none">
                    <Dropdown.Toggle>
                        <BiArrowFromTop />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="animate__animated animate__zoomIn animate__faster">
                        <Dropdown.Item className="d-block m-auto">
                            <AppSearch value={filters.q} onSearch={handleSearchTerm} />
                        </Dropdown.Item>
                        <Dropdown.Item className="d-block m-auto">
                            <ButtonShowDepartments />
                        </Dropdown.Item>
                        <Dropdown.Item className="d-block m-auto">
                            <ButtonShowRoles />
                        </Dropdown.Item>
                        <Dropdown.Item className="d-block m-auto">
                            <AddEmployee />
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <hr />
            <Container fluid>
                <div className="d-xl-flex d-none">
                    <Row className="col mb-3 justify-content-evenly align-items-center">
                        <div className="col-2" style={{ paddingLeft: "6rem" }}>
                            <span
                                className="fw-bolder cursor-pointer"
                                onClick={() => handleSort("name")}
                            >
                                HỌ VÀ TÊN {filters._sort === "name" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "name" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                            </span>
                            {/* <Form.Control type="text" name="name" placeholder="Lọc theo họ và tên..." value={filters.name} onChange={handleFilter} /> */}
                        </div>
                        <div className="col-1">
                            <span
                                className="fw-bolder cursor-pointer"
                                onClick={() => handleSort("dob")}
                            >
                                NGÀY SINH {filters._sort === "dob" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "dob" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                            </span>
                            {/* <Form.Control type="text" name="dob" placeholder="Lọc theo ngày sinh..." value={filters.dob} onChange={handleFilter} /> */}
                        </div>
                        <div className="col-3">
                            <span
                                className="fw-bolder cursor-pointer"
                                onClick={() => handleSort("email")}
                            >
                                EMAIL {filters._sort === "email" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "email" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                            </span>
                            {/* <Form.Control type="text" name="email" placeholder="Lọc theo email..." value={filters.email} onChange={handleFilter} /> */}
                        </div>
                        <div className="col-1">
                            <span
                                className="fw-bolder cursor-pointer"
                                onClick={() => handleSort("phone")}
                            >
                                SĐT {filters._sort === "phone" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "phone" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                            </span>
                            {/* <Form.Control type="text" name="phone" placeholder="Lọc theo số điện spanoại..." value={filters.phone} onChange={handleFilter} /> */}
                        </div>
                        <div className="col-2">
                            <span
                                className="fw-bolder cursor-pointer"
                                onClick={() => handleSort("department.name")}
                            >
                                PHÒNG BAN {filters._sort === "department.name" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "department.name" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                            </span>
                            {/* <Form.Control type="text" name="department.name" placeholder="Lọc theo tên phòng ban..." value={filters.department} onChange={handleFilter} /> */}
                        </div>
                        <div className="col-2">
                            <span
                                className="fw-bolder cursor-pointer"
                                onClick={() => handleSort("position.name")}
                            >
                                CHỨC VỤ {filters._sort === "position.name" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "position.name" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                            </span>
                            {/* <Form.Control type="text" name="position.name" placeholder="Lọc theo tên chức vụ..." value={filters.position} onChange={handleFilter} /> */}
                        </div>
                    </Row>
                </div>
                <div className="d-xl-block d-none">
                    <Row>
                        {
                            employees.map(employee => (
                                <EmployeeItem key={employee.id} employee={employee} />
                            ))
                        }
                        {
                            employees.length === 0 ? (
                                <Card.Body align="center">
                                    Không có dữ liệu
                                </Card.Body>
                            ) : null
                        }
                    </Row>
                </div>
                <div className="d-xl-none">
                    <Row className="mb-3 justify-content-evenly align-items-center">
                        {
                            employees.map(employee => (
                                <EmployeeItem key={employee.id} employee={employee} />
                            ))
                        }
                        {
                            employees.length === 0 ? (
                                <Card.Body align="center">
                                    Không có dữ liệu
                                </Card.Body>
                            ) : null
                        }
                    </Row>
                </div>
                <AppPagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </Container>
        </>
    )
}

export default Employees