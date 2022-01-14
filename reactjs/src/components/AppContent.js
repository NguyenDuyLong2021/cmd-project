import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// routes config
import routes from '../routes'
import { Container, Spinner } from 'react-bootstrap'

const AppContent = () => {
    return (
        <Container fluid className="mt-3">
            <Suspense fallback={<Spinner animation="border" variant="primary" />}>
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
            </Suspense>
        </Container>
    )
}

export default React.memo(AppContent)
