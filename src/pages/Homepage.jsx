import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HeroSection } from '../components/HeroSection'
import Categories from '../components/Categories'
import Products from '../components/Products'
import News from '../components/News'

const Homepage = () => {
return (
    <>
        <Navbar/>
        
        <HeroSection/>

        <Categories/>

        <News/>

        <Products/>

        <Footer/>
    
    
    
    
    </>
)
}

export default Homepage