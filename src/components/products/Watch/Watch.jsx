import React from 'react';
import CardProduct from '../CardProduct';
import Card from '../../UI/Card';
import { useEffect,useState } from 'react';
import { ScaleLoader } from 'react-spinners';


function Watch() {
  const [watches, setWatches] = useState([]);
  const [isLoding , setIsLoading] = useState(true)

  useEffect(() => {
    const fetchWatches = async () => {
      const response = await fetch(
        'https://tech-540cd-default-rtdb.firebaseio.com/watches.json'
      );
      const responseData = await response.json();

      const loadedWatches = [];

      for (const key in responseData) {
        loadedWatches.push({
          id: key,
          img: responseData[key].img,
          ratings: responseData[key].ratings,
          sellsNumber: responseData[key].sellsNumber,
          name: responseData[key].name,
          brand: responseData[key].brand,
          price: responseData[key].price,
        });
      }
      setWatches(loadedWatches)
      setIsLoading(false)
    };

    fetchWatches();
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

  const watchlist = watches.map((watch) => (
    <CardProduct
      key={watch.id}
      id = {watch.id}
      img={watch.img}
      ratings = {watch.ratings}
      sellsNumber = {watch.sellsNumber}
      name={watch.name}
      brand={watch.brand}
      price={watch.price}
    />
  ));

  return (
    <div className='flex-row mt-5'>
      <h1 className='text-3xl ml-16 font-medium font-Myfont'>Watches</h1>
      <Card>
        {watchlist}
      </Card>
  
    </div>
  );
}

export default Watch;