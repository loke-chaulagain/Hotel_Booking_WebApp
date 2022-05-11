import React from 'react'
import Featured from '../../components/featured/Featured'
import GuestHotel from '../../components/guestHotel/GuestHotel'
import Header from '../../components/header/Header'
import Mail from '../../components/mail/Mail'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import "./home.scss"
import Footer from '../../components/footer/Footer'



function Home() {
    return (
        <div className='home'>
            <Navbar />
            <Header />
            <div className="homeWrapper">
                <Featured />
                <h1 className='browseByProperty'>Browse by property type</h1>
                <PropertyList />
                Homes guests love
                <h1 className='homesGuests'>Homes guests love</h1>
                <GuestHotel />
            </div>
            <Mail />
            <Footer />
        </div>
    )
}

export default Home