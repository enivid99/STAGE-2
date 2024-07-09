import React from 'react'

import "../components/ProductListingPage/ProductListingPage.css"
import Navbar from '../components/Navbar/Navbar'
import InformationCenter from '../components/ProductListingPage/InformationCenter'
import NewArrivals from '../components/NewArrivals/NewArrivals'
import PotsandPans from '../components/PotsandPans/PotsandPans'
import Footer from '../components/Footer/Footer'
import Banner from '../components/ProductListingPage/Banner'


const ProductListingPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <InformationCenter />
      <NewArrivals />
      <PotsandPans />
      <Footer />
    </div>
  )
}

export default ProductListingPage;