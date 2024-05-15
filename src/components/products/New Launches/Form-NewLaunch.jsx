import React from 'react'
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const Form_NewLaunch = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true)
    const amountInputRef = useRef()

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(enteredAmountNumber)
    }



    return (
        <form className='flex justify-between items-center' onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                input={{
                    id: 'amount' , 
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button  className='bg-black w-36 mt-4 hover:bg-gray-700 rounded-2xl h-10 text-white mr-4'>+ Add To Cart</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}



        </form>
    )
}

export default Form_NewLaunch
