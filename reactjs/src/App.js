import React, { Component, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = lazy(() => import('./views/pages/login/Login'))
const Register = lazy(() => import('./views/pages/register/Register'))
const Page404 = lazy(() => import('./views/pages/page404/Page404'))
const Page500 = lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
        <Suspense fallback={loading}>
          <Routes>
              <Route path="/login" name="Login Page" element={<Login />} />
              <Route
               
                path="/register"
                name="Register Page"
                element={<Register />}
              />
              <Route path="/404" name="Page 404" element={<Page404 />} />
              <Route path="/500" name="Page 500" element={<Page500 />} />
              <Route path="/*" name="Home" element={<DefaultLayout />} />
              <Route path="*" name="Page 404" element={<Page404 />} />
          </Routes>
        </Suspense>
    )
  }
}

export default App
