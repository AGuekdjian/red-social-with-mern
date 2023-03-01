import React from 'react'
import Header from '../public/Header'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
            <Header />

            <section className="layout__content">
                <p>
                    <h1>Error 404!</h1>
                    <Link to='/'>Volver al Inicio</Link>
                </p>
            </section>
        </>
    )
}

export default Error404
