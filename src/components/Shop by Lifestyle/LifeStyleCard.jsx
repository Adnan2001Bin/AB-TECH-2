import React from 'react'
import './LifeStyleCard.css'

const LifeStyleCard = (props) => {
    return (
        <div className='CardLifeStayle ml-5 shadow-lg cursor-pointer'>
            <img className='Img' src={props.img} alt="" />
            <h1 className='text-2xl mt-2 font-bold'>{props.catagory}</h1>
            <div className='flex '>
                <p className='mt-2 font-semibold text-lg text-cyan-900 mr-3'>View All</p>
                <img className='w-5 h-5 mt-3' src="src\assets\right-arrow.png" alt="" />
            </div>

        </div>
    )
}

export default LifeStyleCard
