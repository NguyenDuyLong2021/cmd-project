
import React from 'react'
import { Pagination } from 'react-bootstrap'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

/*
    Component này có thể được sử dụng lại ở bất cứ đâu
    Truyền vào 2 props:
    1. pagination: một đối tượng chứa 2 thuộc tính:
    + _page: trang hiện tại
    + _totalItem: tổng số Item của danh sách
    2. onPageChange: một function được truyền vào tham số newPage là trang mới khi click vào button
*/
const AppPagination = ({ pagination, onPageChange }) => {
    const { _page, _limit, _totalItem } = pagination
    const totalPage = Math.ceil(_totalItem / _limit)

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
            else if (_page > totalPage - 3) {
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
            if (_page <= 2) {
                for (let i = 1; i <= 3; ++i) {
                    listPage.push(i)
                }
                listPage.push("...")
                listPage.push(totalPage)
            }
            else if (_page > totalPage - 2) {
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
        <div className="d-table m-auto">

            <Pagination className="pt-3 col">
                <Pagination.Item
                    disabled={_page <= 1}
                    onClick={() => handlePageChange(_page - 1)}
                >
                    <BsChevronLeft />
                </Pagination.Item>
                {
                    listPageNumber().map((page, index) => {
                        if (page === _page) {
                            return (
                                <Pagination.Item
                                    key={index}
                                    active
                                >
                                    {page}
                                </Pagination.Item>
                            )
                        }
                        else if (page === "...") {
                            return (
                                <Pagination.Item
                                    disabled
                                    key={index}
                                >
                                    {page}
                                </Pagination.Item>
                            )
                        }
                        else {
                            return (
                                <Pagination.Item
                                    key={index}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </Pagination.Item>
                            )
                        }
                    })
                }
                <Pagination.Item
                    disabled={_page >= totalPage}
                    onClick={() => handlePageChange(_page + 1)}
                >
                    <BsChevronRight />
                </Pagination.Item>
            </Pagination>
        </div>
    )
}

export default AppPagination