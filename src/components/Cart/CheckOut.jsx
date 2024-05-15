import React, { useRef, useState, useContext } from 'react';
import ModalCheckout from './ModalCheckout';
import './CheckOut.css';
import CartContext from '../../Store/cart-context';

const isEmpty = value => value.trim() === '';
const emailValidation = value => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);

const CheckOut = props => {
  const cartCtx = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmite, setDidSubmite] = useState(false)



  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    email: true,
    address: true,
    city: true
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    await fetch('https://tech-540cd-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items,
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to submit order');
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });

    setIsSubmitting(false)
    setDidSubmite(true)
    cartCtx.clearCart()
  };

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = emailValidation(enteredEmail);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      address: enteredAddressIsValid,
      city: enteredCityIsValid
    });

    const formIsValid = enteredNameIsValid && enteredEmailIsValid && enteredAddressIsValid && enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    submitOrderHandler({
      name: enteredName,
      email: enteredEmail,
      address: enteredAddress,
      city: enteredCity
    });
  };

  const nameInputClasses = !formInputValidity.name ? 'bg-red-200 border border-red-400 focus:bg-red-100 focus:outline-red-300' : 'bg-white focus:bg-sky-100';
  const emailInputClasses = !formInputValidity.email ? 'bg-red-200 border border-red-400 focus:bg-red-100 focus:outline-red-300' : 'bg-white focus:bg-sky-100';
  const addressInputClasses = !formInputValidity.address ? 'bg-red-200 border border-red-400 focus:bg-red-100 focus:outline-red-300' : 'bg-white focus:bg-sky-100';
  const cityInputClasses = !formInputValidity.city ? 'bg-red-200 border border-red-400 focus:bg-red-100 focus:outline-red-300' : 'bg-white focus:bg-sky-100';



  const cartModalContent = <React.Fragment>
    <form onSubmit={confirmHandler} className='Form text-lg font-semibold bg-sky-50'>
      <img className='w-40 mt-2' src="src\assets\Basic\AB-TECH-2.png" alt="" />
      <div className=' bg-white rounded-xl w-full text-2xl font-mono font-bold h-16 flex justify-center items-center'>
        <h1>Checkout Form</h1>
      </div>
      <div className='form ' >
        <div className='form-item flex '>
          <input placeholder="First Name" className={`${nameInputClasses} w-full`} type="text" id='name' ref={nameInputRef} />
        </div>
        {!formInputValidity.name && <p className='ml-2 text-red-700'>Please enter a valid Name!</p>}

        <div className='form-item flex '>
          <input placeholder='Email' className={`${emailInputClasses} w-full`} type="text" id='email' ref={emailInputRef} />
        </div>
        {!formInputValidity.email && <p className='ml-2 text-red-700'>Please enter a valid Email!</p>}

        <div className='form-item flex '>
          <input placeholder='Address' className={`${addressInputClasses} w-full`} type="text" id='address' ref={addressInputRef} />
        </div>
        {!formInputValidity.address && <p className=' ml-2 text-red-700'>Please enter a valid Address!</p>}

        <div className='form-item flex '>
          <input placeholder='City' className={`${cityInputClasses} w-full`} type="text" id='city' ref={cityInputRef} />
        </div>
        {!formInputValidity.city && <p className='ml-2 text-red-700'>Please enter a valid City!</p>}
      </div>
      <button className='bg-black text-white w-40 h-14 rounded-xl hover:bg-slate-700 mt-10'>Confirm</button>
    </form>
  </React.Fragment>


  const isSubmittingModalContent = <div className=' flex justify-center relative top-28 rounded-2xl'>
    <div className='submit bg-white rounded-2xl'>
      <img className='w-20' src="src\assets\shipping.png" alt="" />
      <h1 className='text-lg font-bold text-green-600 mt-2'>Sending Order Data.....</h1>

    </div>
  </div>
  const didSubmittingModalContent = <div className=' flex justify-center relative top-28 rounded-2xl'>
    <div className='submit bg-white rounded-2xl'>
      <img className='w-20' src="src\assets\checked.png" alt="" />
      <h1 className='text-lg font-bold text-green-600 mt-2'>Order Successfull!</h1>
      <p className='font-semibold mt-2'>Thank you so much for your order.</p>
      <button onClick={props.onCloseCheckOut} className='bg-green-600 text-white w-28 h-14 rounded-xl hover:bg-green-500 mt-6'>Close</button>
    </div>
  </div>

  return (
    <ModalCheckout onCloseCheckOut={props.onCloseCheckOut}>
      {!isSubmitting && !didSubmite && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmite && didSubmittingModalContent}
    </ModalCheckout>
  );
};

export default CheckOut;
