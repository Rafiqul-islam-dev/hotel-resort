import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <Hero hero="defaultHero">
            <Banner title="Luxurious Room" subtitle="delux rooms start at $200" >
                <Link to="/room" className="btn-primary" >Our rooms</Link>
            </Banner>
        </Hero>
    )
}
