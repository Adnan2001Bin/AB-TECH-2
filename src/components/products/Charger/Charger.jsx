import React from 'react'
import { useEffect, useState } from 'react'
import CardProduct from '../CardProduct'
import Card from '../../UI/Card';
import { ScaleLoader } from 'react-spinners';


function Charger(props) {
    const [chargers, setchargers] = useState([]);
    const [isLoding , setIsLoading] = useState(true)



    useEffect(() => {
        const fetcChargers = async () => {
            const response = await fetch(
                'https://tech-540cd-default-rtdb.firebaseio.com/chargers.json'
            );
            const responseData = await response.json();

            const loadedChargers = [];

            for (const key in responseData) {
                loadedChargers.push({
                    id: key,
                    img: responseData[key].img,
                    ratings: responseData[key].ratings,
                    sellsNumber: responseData[key].sellsNumber,
                    name: responseData[key].name,
                    brand: responseData[key].brand,
                    price: responseData[key].price,
                });
            }
            setchargers(loadedChargers)
            setIsLoading(false)
        };

        fetcChargers();
    }, []);


    if(isLoding) {
        return(
          
          <ScaleLoader
            className='relative left-1/2'
            color={"#000"}
            loading={true}
            size={20}
          />
    
        )
        
      }

    const chargerList = chargers.map((charger) =>
        <CardProduct
            key={charger.id}
            id={charger.id}
            img={charger.img}
            ratings = {charger.ratings}
            sellsNumber= {charger.sellsNumber}

            name={charger.name}
            brand={charger.brand}
            price={charger.price}
        />
    )


    return (
        <div className='flex-row mt-5'>
            <h1 className='text-3xl ml-16 font-medium font-Myfont'>Chargers</h1>
            <Card>
            {chargerList}

            </Card>
        </div>
    )
}

export default Charger
