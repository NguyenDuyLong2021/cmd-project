import React, { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Container, Spinner } from 'react-bootstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.css'

// routes config
import routes from '../routes'

const AppContent = () => {
    const location = useLocation()

    return (
        <Container
            fluid
            className="mt-3"
        >
            <Suspense fallback={<Spinner
                animation="border"
                variant="primary"
            />}>
                <TransitionGroup>
                    <CSSTransition
                        key={location.pathname}
                        classNames="fade"
                        timeout={100}
                        unmountOnExit
                    >
                        <Routes>
                            {routes.map((route, idx) => {
                                return (
                                    route.element && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            name={route.name}
                                            element={<route.element />}
                                        />
                                    )
                                )
                            })}
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            </Suspense>
        </Container>
    )
}

export default React.memo(AppContent)
