import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import RootLayout from './components/Route/Root'
import Watch from './components/products/Watch/Watch';
import Charger from './components/products/Charger/Charger';
import Earbuds from './components/products/Earbuds/Earbuds';
import WiredHeadphone from './components/products/Wired HeadPhone/WiredHeadPhone';
import Speaker from './components/products/Speakers/Speaker';
import PowerBank from './components/products/Power Bank/PowerBank';
import WirelessHeadphone from './components/products/Wireless headphones/WirelessHeadphones';
import WiredEarphones from './components/products/Wired Earphones/WiredEarphones';
import Neckbands from './components/products/Neckbands/Neckbands';
import All from './All';
import NewLaunchesItems from './components/products/New Launches/NewLaunchesItems';
import { Fragment } from 'react';
import LifeStyle from './components/Shop by Lifestyle/LifeStyle';
import Dell from './components/products/Laptop/Dell';
import MacBook from './components/products/Laptop/MacBook';
import Lenovo from './components/products/Laptop/Lenova';
import HP from './components/products/Laptop/HP';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true, element: <All />
        },

        {
          path: '/Watches', element: <Watch />
        },
        {
          path: '/Chargers', element: <Charger />
        },
        {
          path: '/Earbuds', element: <Earbuds />
        },
        {
          path: '/WiredHeadphones', element: <WiredHeadphone />
        },
        {
          path: '/Speakers', element: <Speaker />
        },
        {
          path: '/PowerBanks', element: <PowerBank />
        },
        {
          path: '/WirelessHeadphones', element: <WirelessHeadphone />
        },
        {
          path: '/WiredEarphones', element: <WiredEarphones />
        },
        {
          path: '/Neckbands', element: <Neckbands />
        },
        {
          path: '/NewLaunchesItems', element: <NewLaunchesItems />
        },
        {
          path: '/Dell', element: <Dell />
        },

        {
          path: '/MacBook', element: <MacBook />
        },

        {
          path: '/Lenovo', element: <Lenovo />
        },
        {
          path: '/HP', element: <HP />
        },


      ]

    }
  ])



  return (
    <Fragment>

      <RouterProvider router={router} />;

    </Fragment>
  )
}

export default App



