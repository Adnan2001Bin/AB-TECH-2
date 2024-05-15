import React, { useState, useEffect } from 'react'
import './HomePage.css'
import img1 from '/assets/Home page/ION_New_color_Banner_WEB_1600x.webp'
import img2 from '/assets/Home page/IPL_HP_Banner_WEB_1_1440x.webp'
import img3 from '/assets/Home page/RS_Banner_WEB_1_1440x.webp'
import img4 from '/assets/Home page/Storm_Call_3_WEB_1_1600x.webp'




function HomePage() {
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const backgrounds = [img1, img2, img3, img4];

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 5000)
        return () => clearInterval(interval);
    }, [backgroundIndex])

    const prevBackground = () => {
        setBackgroundIndex((prevIndex) => (prevIndex - 1 + backgrounds.length) % backgrounds.length);
    };

    const nextBackground = () => {
        setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    };

    return (
        <div className="background flex justify-between items-center" style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}>
            <button onClick={prevBackground} className="ml-5 arrow-button left flex pl-3 pt-1 w-14 h-14 font-semibold text-4xl rounded-full  hover:bg-gray-800">&lt;</button>
            <button onClick={nextBackground} className="mr-5 arrow-button right flex pl-4 pt-1 w-14 h-14 font-semibold text-4xl rounded-full  hover:bg-gray-800">&gt;</button>

        </div>

        
    )
}

export default HomePage
