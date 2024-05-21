import { Outlet } from 'react-router-dom'

import Home from '../../Home'
import Footer from '../Layout/Footer'
import CartProvider from '../../Store/CartProvider'


function RootLayout() {
  return (
    <CartProvider>
      <Home />


      <div>

        <Outlet />
      </div>

      <Footer />
    </CartProvider>
  )
}

export default RootLayout
