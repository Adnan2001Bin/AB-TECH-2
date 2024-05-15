import React from 'react';

function Footer() {
    return (
        <div className='w-full flex flex-col justify-between items-center bg-sky-50 mt-20 h-fit'>
            <div className='flex items-center flex-grow'>
                <h1 className='text-lg font-semibold font-mono'>Let's get social</h1>
                <div className='flex ml-5'>
                    <img className='w-8 ml-4' src="src\assets\Basic\facebook.png" alt="" />
                    <img className='w-8 ml-4' src="src\assets\Basic\instagram.png" alt="" />
                    <img className='w-8 ml-4' src="src\assets\Basic\youtube.png" alt="" />
                    <img className='w-8 ml-4' src="src\assets\Basic\linkedin.png" alt="" />
                </div>
            </div>
            <div className='flex mt-5 text-xs font-mono'> 
                <p>Privacy Policy</p>
                <div className='bg-black flex items-center justify-center w-1 h-1 rounded-lg mt-3 ml-2 text-sky-50'>.</div>
                <p className='ml-2'>Terms & Conditions</p>
            </div>
            <p className='text-xs mt-5'>© 2024 Imagine Marketing Limited. All Rights Reserved.</p>
            <p className='text-xs mt-5'>For queries contact us: Manager, Imagine Marketing Limited Unit no. 204 & 205, 2nd floor, D-wing & E-wing,</p>
            <p className='text-xs mt-1'>Corporate Avenue, Gulshan Link Road, Dhaka, Bangladesh</p>
        </div>
    );
}

export default Footer;
