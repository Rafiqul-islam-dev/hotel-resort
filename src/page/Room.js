import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import { Link } from 'react-router-dom'
import RoomContainer from '../component/RoomContainer'
const Room = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our Room" subtitle="delux rooms start at $260" >
                <Link to="/room" className="btn-primary" >Our rooms</Link>
            </Banner>
        </Hero>
        <RoomContainer />
        </>
    )
}

export default Room
