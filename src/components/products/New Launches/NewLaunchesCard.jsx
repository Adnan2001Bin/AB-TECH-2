
import "./NewLaunchesCard.css"
import CartContext from "../../../Store/cart-context"
import { useContext } from 'react'
import Form_NewLaunch from "./Form-NewLaunch"



function NewLaunchesCard(props) {
  const cartCtx = useContext(CartContext)


  const price = `৳${props.price}`


  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      img: props.img,
      amount: amount,
      price: props.price
    })
  }

  return (
    <div className='card mt-3 shadow-md bg-lime-50 ml-4'>
      <img className="img rounded-2xl" src={props.img} alt="" />
      <div className="Launch bg-black text-white text-sm w-32 h-6 rounded-md">
        <p>🎉 New Launch</p>
      </div>
      <div className="Feature bg-yellow-400 w-52 ml-14 rounded-lg h-6">
        <p className="feature text-center text-black text-sm font-semibold">{props.feature}</p>
      </div>
      <p className="ml-3 mt-3 font-Myfont">{props.name}</p>
      <p className="ml-3 mt-1 font-Myfont font-semibold">{price}</p>

      <div>
        <div className="flex justify-between ml-3">
          <div className='flex'>
            <img className='w-5 h-5' src="assets\icons8-star-96.png" alt="" />
            <p>{props.ratings}</p>
          </div>
          <div className='flex'>
            <img className='w-5 h-5' src="assets\icons8-tick-96.png" alt="" />
            <p className='mr-4'>{props.sellsNumber}</p>
          </div>
        </div>
        {/* <button className='bg-black w-36 ml-44 mt-4 hover:bg-gray-700 rounded-2xl h-10 text-white'>+ Add To Cart</button> */}
        <Form_NewLaunch onAddToCart = {addToCartHandler}/>
      </div>
    </div>
  )
}

export default NewLaunchesCard
