import React from 'react'

import { useState, useEffect } from 'react'
import LifeStyleCard from './LifeStyleCard';
import './LifeStyle.css'

const LifeStyle = () => {
    const [lifeStyle, setLifeStyle] = useState([]);

    useEffect(() => {
        const fetcLifeStyles = async () => {
            const response = await fetch(
                'https://tech-540cd-default-rtdb.firebaseio.com/lifeStyle.json'
            );
            const responseData = await response.json();

            const loadedLifeStyle = [];

            for (const key in responseData) {
                loadedLifeStyle.push({
                    id: key,
                    img: responseData[key].img,
                    catagory: responseData[key].catagory
                });
            }
            setLifeStyle(loadedLifeStyle)
        };

        fetcLifeStyles();
    }, []);




    const lifeStyleList = lifeStyle.map((catagory) => (
        <LifeStyleCard
            key={catagory.id}
            id={catagory.id}
            img={catagory.img}
            catagory={catagory.catagory}
        />
    ));
    return (
        <div className='flex justify-center lifestyle mt-28 ml-16 w-11/12'> 
            {lifeStyleList}
        </div>
    )
}

export default LifeStyle
