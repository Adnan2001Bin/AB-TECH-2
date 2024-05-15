import { Link } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import HeaderCetagories from './HeaderCetagories';
import OfficeEquipment from './OfficeEquipment';
import DailyDeals from './DailyDeals';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fragment>
            <div className={`w-full bg-blue-50 h-12 flex items-center px-20 justify-center Hotline ${scrolled ? 'hidden' : ''}`}>
                <img className='w-5 mr-1' src="assets\Basic\telephone.png" alt="" />
                <h1> Hotline: <span className='font-semibold'>0187-871-0544</span></h1>
            </div>
            <header className={`w-full h-20 border-b-2 border-gray-200 flex items-center px-20 justify-between ${scrolled ? 'fixed top-0 bg-white z-10' : ''}`}>
                <div className='flex items-center'>
                    <Link to='/'>
                        <div>
                            <img className='w-44' src="assets\Basic\AB-TECH.png" alt="" />
                        </div>
                    </Link>
                    <button className='ml-5 hover:underline'>
                        <HeaderCetagories onClickCetagories={props.onShowCategories} />
                    </button>
                    <button className='ml-5 hover:underline'>
                        <OfficeEquipment />
                    </button>
                    <button className='ml-5 hover:underline'>
                        <DailyDeals />
                    </button>
                </div>
                <button className=''>
                    <HeaderCartButton onClick={props.onShowCart} />
                </button>


            </header>
        </Fragment>
    );
}

export default Header;




