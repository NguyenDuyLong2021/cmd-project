import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineSortAscending, AiOutlineSortDescending } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'
import * as actions from '../../actions/employeesAction'
import AppPagination from '../../components/AppPagination'
import EmployeeItem from './EmployeeItem'
import AddEmployee from './SubmitEmployee/AddEmployee'
import ButtonShowDepartments from './departments/ButtonShowDepartments'
import AppSearch from '../../components/AppSearch'
import ButtonShowRoles from './roles/ButtonShowRoles'

const queryString = require('query-string')

const Employees = () => {
    const employees = useSelector(state => state.employees.data)
    const pagination = useSelector(state => state.employees.pagination)

    const dispatch = useDispatch()
    const location = useLocation()
    const navigation = useNavigate()

    const [filters, setFilters] = useState({
        _page: 1,
        _limit: 20,
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
            <div className="row justify-content-between">
                <div className="col-auto fw-bold fs-5">
                    DANH SÁCH NHÂN VIÊN
                </div>
                <div className="col" />
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
            <hr />
            <Container fluid>
                <div className="item row align-items-center">
                    <Col lg={2} className="ps-5">
                        <Button
                            variant="none"
                            onClick={() => handleSort("name")}
                        >
                            <span className="fw-bolder">
                                HỌ VÀ TÊN {filters._sort === "name" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "name" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                            </span>
                        </Button>
                        <Form.Control type="text" name="name" placeholder="Lọc theo họ và tên..." value={filters.name} onChange={handleFilter} />
                    </Col>
                    <Col lg={1}>
                        <Button
                            variant="none"
                            onClick={() => handleSort("dob")}
                        >
                            <span className="fw-bolder">
                                NGÀY SINH {filters._sort === "dob" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "dob" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                            </span>
                        </Button>
                        <Form.Control type="text" name="dob" placeholder="Lọc theo ngày sinh..." value={filters.dob} onChange={handleFilter} />
                    </Col>
                    <Col lg={3}>
                        <Button
                            variant="none"
                            onClick={() => handleSort("email")}
                        >
                            <span className="fw-bolder">
                                EMAIL {filters._sort === "email" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "email" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                            </span>
                        </Button>
                        <Form.Control type="text" name="email" placeholder="Lọc theo email..." value={filters.email} onChange={handleFilter} />
                    </Col>
                    <Col lg={1}>
                        <Button
                            variant="none"
                            onClick={() => handleSort("phone")}
                        >
                            <span className="fw-bolder">
                                SĐT {filters._sort === "phone" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "phone" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                            </span>
                        </Button>
                        <Form.Control type="text" name="phone" placeholder="Lọc theo số điện divoại..." value={filters.phone} onChange={handleFilter} />
                    </Col>
                    <Col lg={2}>
                        <Button
                            variant="none"
                            onClick={() => handleSort("department.name")}
                        >
                            <span className="fw-bolder">
                                PHÒNG BAN {filters._sort === "department.name" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "department.name" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                            </span>
                        </Button>
                        <Form.Control type="text" name="department.name" placeholder="Lọc theo tên phòng ban..." value={filters.department} onChange={handleFilter} />
                    </Col>
                    <Col lg={2}>
                        <Button
                            variant="none"
                            onClick={() => handleSort("position.name")}
                        >
                            <span className="fw-bolder">
                                CHỨC VỤ {filters._sort === "position.name" && filters._order === "asc" ? <AiOutlineSortAscending size={20} /> : null} {filters._sort === "position.name" && filters._order === "desc" ? <AiOutlineSortDescending size={20} /> : null}
                            </span>
                        </Button>
                        <Form.Control type="text" name="position.name" placeholder="Lọc theo tên chức vụ..." value={filters.position} onChange={handleFilter} />
                    </Col>
                </div>
                {
                    employees.map(employee => (
                        <EmployeeItem key={employee.id} employee={employee} />
                    ))
                }
                {employees.length === 0 ? (
                    <Card.Body align="center">
                        Không có dữ liệu
                    </Card.Body>
                ) : null}
                <AppPagination
                    pagination={pagination}
                    onPageChange={handlePageChange}
                />
            </Container>
        </>
    )
}

export default Employees