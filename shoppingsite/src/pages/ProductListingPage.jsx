import React from 'react'

import "../components/ProductListingPage/ProductListingPage.css"
import Navbar from '../components/Navbar/Navbar'
import InformationCenter from '../components/ProductListingPage/InformationCenter'
import Banner from '../components/ProductListingPage/Banner'
// import Footer from '../components/Footer/Footer'


const ProductListingPage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <InformationCenter />

    </div>
  )
}

export default ProductListingPage;