import React, { Fragment, useState, } from 'react'
import HomePage from './components/products/HomePage'
import BestSellers from './components/products/Best Sellers/BestSellers'
import NewLaunches from './components/products/New Launches/NewLaunches'
import LifeStyle from './components/Shop by Lifestyle/LifeStyle'


function All() {



  return (
    <Fragment>



      <HomePage />
      <BestSellers />
      <NewLaunches />
      {/* <LifeStyle /> */}
    </Fragment>
  )
}

export default All
