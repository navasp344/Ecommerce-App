import React from 'react'
import Banner from '../banner/Banner'
import Footer from '../footer/Footer'
import OfferSection from '../offerSection/OfferSection'
import ProductListPage from '../../pages/ProductListPage'

function Home() {
  return (
    <div className=''>
    <Banner/>
    <OfferSection/>
    <ProductListPage/>
    <Footer/>
    </div>
    
  )
}

export default Home