import React, { useState } from 'react'
import defaultAvatar from './../../assets/images/avatars/defaultAvatar.jpg'
import { Dropdown, Image } from 'react-bootstrap'
import { BsBoxArrowRight, BsPersonCircle } from 'react-icons/bs'

const AppHeaderDropdown = () => {
    const [visible, setVisible] = useState(false)
    return (
        <Dropdown
            style={{
                cursor: "pointer"
            }}
            className="col-auto"
            show={visible}
            onToggle={() => setVisible(!visible)}
        >
            <div className="dropdown-toggle me-5" onClick={() => setVisible(!visible)}>
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
            </div>
            <Dropdown.Menu placement="bottom-end">
                <Dropdown.Item component="button">
                    <BsPersonCircle />
                    Tài khoản
                </Dropdown.Item>
                <Dropdown.Item href="info/me">
                    <BsBoxArrowRight />
                    Đăng xuất
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AppHeaderDropdown
