import {Outlet} from 'react-router-dom'

import Home from '../../Home'
import Footer from '../Layout/Footer'
import CartProvider from '../../Store/CartProvider'


function RootLayout() {
  return (
    <CartProvider>
      <Home />
      

      <div>
      <h1>adnan</h1>
      <h1>adnan</h1>
      <h1>adnan</h1>
      <h1>adnan</h1>
      <h1>adnan</h1>
        <Outlet />
      </div>

      <Footer />
    </CartProvider>
  )
}

export default RootLayout
