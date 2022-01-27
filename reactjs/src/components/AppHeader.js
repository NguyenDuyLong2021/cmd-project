import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import AppNavbarNav from './AppNavbarNav'
import AppHeaderDropdown from './header/AppHeaderDropdown'
import logo from "../assets/brand/logo-full.png"

const AppHeader = () => {

    return (
        <Navbar
            id="navbarHeader"
            bg="light"
            expand="lg"
            sticky="top"
        >
            <Container fluid>
                <Navbar.Brand>
                    <img
                        src={logo}
                        width="120"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Cảnh Báo Sớm Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse
                    className="row flex-lg-row flex-sm-column"
                    id="navbarScroll">
                    <AppNavbarNav />
                    <AppHeaderDropdown />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppHeader
