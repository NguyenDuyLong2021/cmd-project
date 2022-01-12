import React from 'react'
import AppContent from '../components/AppContent'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'

const DefaultLayout = () => {
    return (
        <div>
            <AppHeader />
            <div className="body flex-grow-1 px-3">
                <AppContent />
            </div>
            <AppFooter />
        </div>
    )
}

export default DefaultLayout