import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import * as action from "../../actions/todoListAction"
import IconNumeberPagination from './IconNumeberPagination';
import Pagination from 'react-bootstrap/Pagination'

const PaginationCustomize = () => {
    const pages = 10
    const [pageCurrent, setPageCurrent] = useState(1)
    // function used to render pagination numbers 
    const renderNumberPagination = () => {
        var listPaginationItem = []
        var x
        if (pages <= 10) {
            for (x = 1; x <= pages; x++) {
                listPaginationItem.push(<Pagination.Item active={pageCurrent === x} data-key={x} onClick={(e) => clickPaginationItem(e)} key={x}>{x}</Pagination.Item>)
            }
        } else if (pages > 10) {
            for (x = 1; x <= 4; x++) {
                listPaginationItem.push(<Pagination.Item active={pageCurrent === x} key={x}>{x}</Pagination.Item>)
            }
            listPaginationItem.push(<Pagination.Ellipsis key={"Ellipsis"} />)
            listPaginationItem.push(<Pagination.Item active={pageCurrent === x} key={pages}>{pages}</Pagination.Item>)
        }
        return listPaginationItem.map(item => item)
    }
    console.log("hay za")
    const clickPaginationItem = (event) => {
        const selectedIndex = event.target.getAttribute("data-key");;
        setPageCurrent(parseInt(selectedIndex))
    }
    return (
        <Pagination size="sm" className='w-auto mx-auto rounded-pill p-1'>
            <Pagination.First />
            {/* <Pagination.Ellipsis /> */}

            {/* <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item >{20}</Pagination.Item> */}
            {renderNumberPagination()}
            <Pagination.Last />
        </Pagination>
    )
}
export default PaginationCustomize;