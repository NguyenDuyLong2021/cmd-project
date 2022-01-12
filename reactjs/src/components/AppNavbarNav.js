import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import _nav from "../_nav"

const AppNavbarNav = () => {
    return (
        <Nav
            className="col row justify-content-between fw-bold"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            {_nav.map((navItem, index) => (
                <NavLink
                    key={index}
                    to={navItem.to}
                    className={({ isActive }) =>
                        "btn fw-bold mx-3 col " + (isActive ? "bg-gradient text-white px-3" : "btn-none px-3")
                    }
                >
                    {navItem.name.toUpperCase()}
                </NavLink>
            ))}
        </Nav>
    )
}

export default AppNavbarNav