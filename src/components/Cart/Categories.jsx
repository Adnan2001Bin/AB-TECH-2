import { Link } from 'react-router-dom'
import ModalCategories from '../UI/ModalCategories'

function Categories(props) {
  return (
    <ModalCategories onCategoriesClose={props.onCategoriesClose}>
      <div className='w-full pl-20 pt-5  h-48 grid grid-cols-4 font-Myfont text-sm'>
        
          <Link className=' w-1/4' to='/Watches'>
            <button onClick={props.onCategoriesClose} className='w-full flex items-center justify-start hover:opacity-70'>
              <img className='w-14' src="assets\Basic\smartwatches_100x.webp" alt="" />
              Watches
            </button>
          </Link>

          <Link className=' w-1/4' to='/Chargers'>
            <button onClick={props.onCategoriesClose} className='w-full h-14 flex items-center justify-start hover:opacity-70'>
              <img className='w-14 mr-' src="assets\Basic\Charger_100x.webp" alt="" />
              Charger
            </button>
          </Link>

          <Link className=' w-1/4' to='/Earbuds'>
            <button onClick={props.onCategoriesClose} className='w-full h-14 flex items-center justify-start hover:opacity-70 '>
              <img className='w-14' src="assets\Basic\dropdown-TWS_100x.webp" alt="" />
              Earbuds
            </button>
          </Link>

  
          <Link className=' w-1/4' to='/Speakers'>
            <button onClick={props.onCategoriesClose} className='w-full flex items-center justify-start hover:opacity-70'>
              <img className='w-14' src="public\assets\Basic\box-5_100x.webp" alt="" />
              Speaker
            </button>
          </Link>

          <Link className=' w-1/4' to='/PowerBanks'>
            <button onClick={props.onCategoriesClose} className='w-full flex items-center justify-start hover:opacity-70'>
              <img className='w-14' src="public\assets\Basic\powerbank_100x.webp" alt="" />
              Power Banks
            </button>
          </Link>

          <Link className=' w-1/4' to='/WirelessHeadphones'>
            <button onClick={props.onCategoriesClose} className='w-full flex items-center justify-start hover:opacity-70'>
              <img className='w-14 ' src="assets\Basic\Rectangle271_100x.webp" alt="" />
              Wireless Headphones
            </button>
          </Link>

          <Link className=' w-1/4' to='/WiredEarphones'>
            <button onClick={props.onCategoriesClose} className='w-full flex items-center justify-start hover:opacity-70'>
              <img className='w-14' src="assets\Basic\wiredheadphones_100x.webp" alt="" />
              Wired Earphones
            </button>
          </Link>
       
          <Link className=' w-1/5' to='/Neckbands'>
            <button onClick={props.onCategoriesClose} className='w-full flex items-center justify-start hover:opacity-70'>
              <img className='w-14' src="assets\Basic\Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png" alt="" />
              Neckbands
            </button>
          </Link>
      </div>
    </ModalCategories>
    
  )
}

export default Categories
