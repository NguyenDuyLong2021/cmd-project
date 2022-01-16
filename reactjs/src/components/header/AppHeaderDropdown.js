import React from 'react'
import defaultAvatar from './../../assets/images/avatars/defaultAvatar.jpg'
import { Dropdown, Image } from 'react-bootstrap'
import { BsBoxArrowRight, BsPersonCircle } from 'react-icons/bs'

const AppHeaderDropdown = () => {
    return (
        <Dropdown className="col-auto">
            <Dropdown.Toggle variant="none">
                <Image
                    roundedCircle
                    src={defaultAvatar}
                    style={{
                        maxWidth: "3rem",
                        maxHeight: "3rem",
                    }}
                    className="me-2"
                />
                Nguyễn Võ Song Toàn
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <BsPersonCircle />
                    Tài khoản
                </Dropdown.Item>
                <Dropdown.Item>
                    <BsBoxArrowRight />
                    Đăng xuất
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AppHeaderDropdown
