import React from 'react'



const Cart_Card = (props) => {
    const price = `৳${props.price}`;
    return (
        <li>
            <div className="flex items-center mb-2 bg-green-50 mt-2 rounded-lg">
                <div className=' w-1/4'>
                    <img className="w-full rounded-xl" src={props.img} alt="" />
                </div>
                <div className="ml-8 flex flex-col justify-center">
                    <h2 className="text-xl font-bold">{props.name}</h2>
                    <div className='text-xl font-semibold mt-3'>
                        <span className='text-teal-700'>{price}</span>
                        <span className=' px-1 rounded-md border border-gray-400   ml-10'>x {props.amount}</span>
                    </div>

                    <div className='mt-3 text-3xl font-extrabold flex'>
                        <button className="h-8 w-14 border border-teal-700 mr-3  rounded-lg flex justify-center items-center hover:bg-black hover:text-white" onClick={props.onRemove}>-</button>
                        <button className="h-8 w-14 border border-teal-700 mr-3  rounded-lg flex justify-center items-center hover:bg-black hover:text-white" onClick={props.onAdd}>+</button>
                    </div>
                </div>

            </div>
        </li>
    )
}

export default Cart_Card
