import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <Hero hero="defaultHero">
            <Banner title="404" subtitle="page not found" >
                <Link to="/" className="btn-primary" >Back to home</Link>
            </Banner>
        </Hero>
    )
}
