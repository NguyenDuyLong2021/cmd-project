import { cilChevronLeft, cilChevronRight } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CPagination, CPaginationItem } from '@coreui/react';
import React from 'react'

/*
    Component này có thể được sử dụng lại ở bất cứ đâu
    Truyền vào 2 props:
    1. pagination: một đối tượng chứa 2 thuộc tính:
    + _page: trang hiện tại
    + _totalItem: tổng số Item của danh sách
    2. onPageChange: một function được truyền vào tham số newPage là trang mới khi click vào button
*/
const AppPagination = ({ pagination, onPageChange }) => {
    const { _page, _totalItem } = pagination
    const totalPage = Math.ceil(_totalItem / 10)

    const listPageNumber = () => {
        const listPage = []
        if (totalPage >= 8) {
            if (_page < 4) {
                for (let i = 1; i <= 4; ++i) {
                    listPage.push(i);
                }
                listPage.push("...");
                listPage.push(totalPage);
            }
            else if (_page > totalPage - 4) {
                listPage.push(1)
                listPage.push("...")
                for (let i = totalPage - 3; i <= totalPage; ++i) {
                    listPage.push(i);
                }
            }
            else {
                listPage.push(1)
                listPage.push("...")
                for (let i = _page - 2; i <= _page + 2; ++i) {
                    listPage.push(i);
                }
                listPage.push("...")
                listPage.push(totalPage)
            }
        }
        else if (totalPage >= 5) {
            if (_page <= 3) {
                for (let i = 1; i <= 3; ++i) {
                    listPage.push(i)
                }
                listPage.push("...")
                listPage.push(totalPage)
            }
            else if (_page > totalPage - 3) {
                listPage.push(1)
                listPage.push("...")
                for (let i = totalPage - 2; i <= totalPage; ++i) {
                    listPage.push(i);
                }
            }
            else {
                listPage.push(1)
                listPage.push("...")
                for (let i = _page - 1; i <= _page + 1; ++i) {
                    listPage.push(i)
                }
                listPage.push("...")
                listPage.push(totalPage)
            }
        }
        else {
            for (let i = 1; i <= totalPage; ++i) {
                listPage.push(i)
            }
        }
        return listPage
    }

    const handlePageChange = (newPage) => {
        onPageChange(newPage);
    }
    return (
        <>
        
        <CPagination className="pt-3" align="center">
            <CPaginationItem
                style={{ cursor: "pointer" }}
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                <CIcon icon={cilChevronLeft}></CIcon>
            </CPaginationItem>
            {listPageNumber().map((page, index) => {
                if (page === _page) {
                    return (
                        <CPaginationItem
                            key={index}
                            style={{ cursor: "pointer" }}
                            active
                        >{page}</CPaginationItem>
                    )
                }
                else if (page === "...") {
                    return (
                        <CPaginationItem
                            key={index}
                            style={{ cursor: "pointer" }}
                        >{page}</CPaginationItem>
                    )
                }
                else {
                    return (
                        <CPaginationItem
                            key={index}
                            style={{ cursor: "pointer" }}
                            onClick={() => handlePageChange(page)}
                        >{page}</CPaginationItem>
                    )
                }
            })}
            <CPaginationItem
                style={{ cursor: "pointer" }}
                disabled={_page >= totalPage}
                onClick={() => handlePageChange(_page + 1)}
            >
                <CIcon icon={cilChevronRight}></CIcon>
            </CPaginationItem>
        </CPagination>
        </>
    )
}

export default AppPagination