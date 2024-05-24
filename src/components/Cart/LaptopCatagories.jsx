import { Link } from 'react-router-dom'
import ModalLaptop from '../UI/ModalLaptop'

function LaptopCatagories(props) {
  return (
    <ModalLaptop onCloseLaptop={props.onCloseLaptop}>
      <div className='w-full pl-10  h-48 grid grid-cols-3 font-Myfont text-sm'>
        
          <Link onClick={props.onCloseLaptop} className=' w-2/3 h-16 mb-10' to='/Dell'>
            <button onClick={props.onCategoriesClose} className='w-full flex items-center justify-start hover:opacity-70 border-2 border-gray-300 rounded-lg' >
              <img className='w-full rounded-lg' src="assets\Laptop\Dell-Symbol.jpg" alt="" />
            </button>
          </Link>

          <Link onClick={props.onCloseLaptop} className=' w-2/3 h-16 ' to='/MacBook'>
            <button onClick={props.onCategoriesClose} className='w-full h-16 flex items-center justify-start hover:opacity-70 border-2 border-gray-300 rounded-lg' >
              <img className='w-full rounded-lg' src="assets\Laptop\think-different-apple-mac-31-wallpaper-preview.jpg" alt="" />
            </button>
          </Link>

          <Link onClick={props.onCloseLaptop} className=' w-2/3 h-16 ' to='/Lenovo'>
            <button onClick={props.onCategoriesClose} className='w-full h-14 flex items-center justify-start hover:opacity-70 '>
              <img className='w-full rounded-lg' src="assets\Laptop\lenovo-mobile-logo.jpg" alt="" />
            </button>
          </Link>

  
          <Link onClick={props.onCloseLaptop} className=' w-2/3 h-16 ' to='/HP'>
            <button onClick={props.onCategoriesClose} className='w-full flex items-center justify-start hover:opacity-70'>
              <img className='w-full rounded-lg' src="assets\Laptop\3290d68ee2ca14559cae8afe4538d97f.jpg" alt="" />
            </button>
          </Link>

          <Link onClick={props.onCloseLaptop} className=' w-2/3 h-16 ' to='/PowerBanks'>
            <button onClick={props.onCategoriesClose} className='w-full flex items-center justify-start hover:opacity-70'>
              <img className='w-full rounded-lg' src="assets\Laptop\550x309.jpg" alt="" />
            </button>
          </Link>

          <Link onClick={props.onCloseLaptop} className=' w-2/3 h-16' to='/WirelessHeadphones'>
            <button onClick={props.onCategoriesClose} className='w-full flex items-center justify-start hover:opacity-70'>
              <img className='w-full rounded-lg' src="assets\Laptop\YjJxpTHe3Z6i5AY3t4w2ER.jpg" alt="" />
            </button>
          </Link>
      </div>
    </ModalLaptop>
    
  )
}

export default LaptopCatagories
