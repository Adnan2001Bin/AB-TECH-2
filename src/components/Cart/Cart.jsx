import "./Cart.css"
import ModalCart from "../UI/ModalCart"
import { Link } from "react-router-dom"
import CartContext from "../../Store/cart-context"
import { useContext } from "react"
import Cart_Card from "./Cart-Card"

function Cart(props) {
  const cartCtx = useContext(CartContext)
  const totalAmount = `৳${cartCtx.totalAmount}`
  const hasItems = cartCtx.items.length > 0;
  

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
   };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item , amount:1})
  };

  


  const handleClick = () => {
    props.onShowCheckOut()
    props.onClose()
  }



  const cartItems = (
    <ul className="cart-items bg-white">
      {cartCtx.items.map((item) => (
        <Cart_Card
          key={item.id}
          name={item.name}
          img={item.img}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}

        />
      )
      )}
    </ul>
  )




  return (
    <ModalCart onClose={props.onClose}>

      <div className="Cart">

        <div className="mt-5 text-xl font-bold">
          <h1>Your Cart</h1>
        </div>


        {hasItems && <div>
          {cartItems}
        </div>}


        {!hasItems &&
          <div className="emptyCart">

            <img className="w-4/5" src="assets\Untitled design.png" alt="" />
            <h1 className="text-xl font-bold">Your Cart is feeling lonely</h1>


            <Link to='/'>
              <button onClick={props.onClose} className="bg-black text-white w-40 h-10 rounded-xl mt-5">Start Shopping</button>
            </Link>
          </div>}
      </div>

      {hasItems && <div className="totalAmount flex items-center justify-between w-full bg-gray-100">
        <p className="text-2xl font-semibold pl-4">{totalAmount}</p>

        <button  onClick={handleClick} className={`w-44 text-white bg-black border border-black hover:bg-gray-600 rounded-xl h-14 text-center `}>Confirm Order</button>
      </div>}

    </ModalCart>

  )
}

export default Cart
