import React from 'react'

import { Container, Navbar } from 'react-bootstrap'

import AppNavbarNav from './AppNavbarNav'
import AppHeaderDropdown from './header/AppHeaderDropdown'

const AppHeader = () => {

    return (
        <Navbar bg="body" expand="lg" sticky="top">
            <Container className="row justify-content-between" fluid>
                <Navbar.Brand className="col-auto">CBS</Navbar.Brand>
                <Navbar.Toggle className="col-auto" aria-controls="navbarScroll" />
                <Navbar.Collapse className="col row-lg" id="navbarScroll">
                    <AppNavbarNav />
                    <AppHeaderDropdown />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppHeader
