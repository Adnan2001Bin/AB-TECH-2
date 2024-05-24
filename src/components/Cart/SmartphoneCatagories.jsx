import { Link } from 'react-router-dom'
import ModalPhone from '../UI/ModalPhone'

function SmartphoneCatagories(props) {
  return (
    <ModalPhone  onClosePhone={props.onClosePhone}>
      <div className=' w-full h-48 font-Myfont text-sm mt-5 '>
        
          <Link className=' w-1/4 ' to='/Watches'>
            <button onClick={props.onCategoriesClose} className='w-full mb-3 flex items-center justify-center hover:opacity-70 border-2 border-gray-300 rounded-xl'>
              <img className='w-16 mr-5' src="assets\Smartphone\apple-logo-computer-ipad-iphone-software-vector-19944341.jpg" alt="" />
              <p className='text-xl font-semibold'>Apple</p>
            </button>
          </Link>

          <Link className=' w-1/4' to='/Watches'>
            <button onClick={props.onCategoriesClose} className='w-full mb-3 flex items-center justify-center hover:opacity-70 border-2 border-gray-300 rounded-xl'>
              <img className='w-3/4 mr-5' src="assets\Smartphone\images.png" alt="" />
            </button>
          </Link>

          <Link className=' w-1/4' to='/Watches'>
            <button onClick={props.onCategoriesClose} className='w-full mb-5 flex items-center justify-center hover:opacity-70 border-2 border-gray-300 rounded-xl'>
              <img className='w-32 rounded-xl' src="assets\Smartphone\oppo-logo-oppo-icon-free-free-vector.jpg" alt="" />
            </button>
          </Link>

          <Link className=' w-1/4' to='/Watches'>
            <button onClick={props.onCategoriesClose} className='w-full mb-3 flex items-center justify-center hover:opacity-70 border-2 border-gray-300 rounded-xl'>
              <img className='w-32' src="public\assets\Smartphone\samsung-brand-logo-phone-symbol-design-south-korean-mobile-illustration-free-vector.jpg" alt="" />
            </button>
          </Link>

          <Link className=' w-1/4' to='/Watches'>
            <button onClick={props.onCategoriesClose} className='w-full mb-3 flex items-center justify-center hover:opacity-70 border-2 border-gray-300 rounded-xl'>
              <img className='w-44 rounded-xl' src="\assets\Smartphone\Symphony-Mobile-Logo-Vector-Png.jpg" alt="" />

            </button>
          </Link>

          <Link className=' w-1/4' to='/Watches'>
            <button onClick={props.onCategoriesClose} className='w-full flex items-center justify-center hover:opacity-70 border-2 border-gray-300 rounded-xl'>
              <img className='w-16' src="assets\Smartphone\vivo-brand-logo-phone-symbol-design-chinese-mobile-illustration-free-vector.jpg" alt="" />
 
            </button>
          </Link>
      </div>
    </ModalPhone>
    
  )
}

export default SmartphoneCatagories
