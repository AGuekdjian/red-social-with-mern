import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const PublicLayout = () => {
    return (
        <>
            <Header />

            <section className="layout__content">
                <Outlet />
            </section>
        </>
    )
}

export default PublicLayout
