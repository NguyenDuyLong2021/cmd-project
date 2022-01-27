import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import _nav from "../_nav"

const AppNavbarNav = () => {
    return (
        <Nav
            className="col row flex-lg-row flex-sm-column justify-content-center fw-bold"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            {
                _nav.map((navItem, index) => (
                    <NavLink
                        key={index}
                        to={navItem.to}
                        className={({ isActive }) =>
                            "btn fw-bold mx-5 col-auto " + (isActive ? "bg-gradient text-white" : "btn-none")
                        }
                    >
                        {navItem.name.toUpperCase()}
                    </NavLink>
                ))
            }
        </Nav>
    )
}

export default AppNavbarNav