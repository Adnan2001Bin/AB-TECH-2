
import { useContext } from 'react'
import Form from '../UI/Form'
import './CardProduct.css'
import React from 'react'
import CartContext from '../../Store/cart-context'


function CardProduct(props) {
    const cartCtx = useContext(CartContext)
    
    const price = `৳${props.price}`


    const addToCartHandler = amount =>{
        cartCtx.addItem({
            id : props.id,
            name : props.name,
            img : props.img,
            amount: amount,
            price: props.price
        })
    }




    return (
        <div className='Card flex items-center cursor-pointer bg-red-50 rounded-lg shadow-md ml-4 mt-3'>
            <div className=' w-2/6 h-48 '>
                <img className='w-full h-full rounded-lg' src={props.img} alt="" />
            </div>
            <div className='w-9/12 ml-3 font-Myfont'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <img className='w-5 h-5' src="public\assets\icons8-star-96.png" alt="" />
                        <p>{props.ratings}</p>
                    </div>
                    <div className='flex'>
                        <img className='w-5 h-5' src="public\assets\icons8-tick-96.png" alt="" />
                        <p className='mr-4'>{props.sellsNumber}</p>
                    </div>
                </div>
                <div className='bg-red-50 flex justify-between'>
                    <h1 className='font-semibold'>{props.name}</h1>
                    <p className='mr-4 font-semibold'>{props.brand}</p>

                </div>
                <p className='font-medium mt-1 mb-1'>{price}</p>
                <Form onAddToCart = {addToCartHandler}/>

            </div>

        </div>
    )
}

export default CardProduct
