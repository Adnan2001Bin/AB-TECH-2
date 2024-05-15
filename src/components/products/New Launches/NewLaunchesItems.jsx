import React from 'react'
import { useEffect, useState } from 'react'
import CardProduct from '../CardProduct'
import Card from '../../UI/Card'
import { ScaleLoader } from 'react-spinners';


function NewLaunchesItems(props) {
    const [newLaunchesItems, setNewLaunchesItems] = useState([]);
    const [isLoding, setIsLoading] = useState(true)


    useEffect(() => {
        const fetcNewLaunchesItems = async () => {
            const response = await fetch(
                'https://tech-540cd-default-rtdb.firebaseio.com/newLaunchesItems.json'
            );
            const responseData = await response.json();

            const loadedNewLaunchesItems = [];

            for (const key in responseData) {
                loadedNewLaunchesItems.push({
                    id: key,
                    img: responseData[key].img,
                    ratings: responseData[key].ratings,
                    sellsNumber: responseData[key].sellsNumber,
                    name: responseData[key].name,
                    brand: responseData[key].brand,
                    price: responseData[key].price,
                });
            }
            setNewLaunchesItems(loadedNewLaunchesItems)
            setIsLoading(false)
        };

        fetcNewLaunchesItems();
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


    const newLaunchesItemlist = newLaunchesItems.map((newLaunchesItem) =>
        <CardProduct
            key={newLaunchesItem.id}
            id={newLaunchesItem.id}
            img={newLaunchesItem.img}
            ratings={newLaunchesItem.ratings}
            sellsNumber={newLaunchesItem.sellsNumber}

            name={newLaunchesItem.name}
            brand={newLaunchesItem.brand}
            price={newLaunchesItem.price}
        />
    )


    return (
        <div className='flex-row mt-5'>
            <h1 className='text-3xl ml-16 font-medium font-Myfont'>New Launches</h1>
            <Card>
                {newLaunchesItemlist}
            </Card>
        </div>
    )
}

export default NewLaunchesItems
