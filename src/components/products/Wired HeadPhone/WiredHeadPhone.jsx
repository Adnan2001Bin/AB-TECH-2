import React from 'react';
import CardProduct from '../CardProduct';
import Card from '../../UI/Card';
import { useEffect,useState } from 'react';
import { ScaleLoader } from 'react-spinners';


function WiredHeadphone() {
  const [wiredHeadphones, setWiredHeadphones] = useState([]);
  const [isLoding , setIsLoading] = useState(true)


  useEffect(() => {
    const fetchWiredHeadphones = async () => {
      const response = await fetch(
        'https://tech-540cd-default-rtdb.firebaseio.com/wiredHeadphones.json'
      );
      const responseData = await response.json();

      const loadedWiredHeadphones = [];

      for (const key in responseData) {
        loadedWiredHeadphones.push({
          id: key,
          img: responseData[key].img,
          ratings: responseData[key].ratings,
          sellsNumber: responseData[key].sellsNumber,
          name: responseData[key].name,
          brand: responseData[key].brand,
          price: responseData[key].price,
        });
      }
      setWiredHeadphones(loadedWiredHeadphones)
      setIsLoading(false)
    };

    fetchWiredHeadphones();
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



  const wiredHeadphonelist = wiredHeadphones.map((wiredHeadphone) => (
    <CardProduct
      key={wiredHeadphone.id}
      id={wiredHeadphone.id}
      img={wiredHeadphone.img}
      ratings = {wiredHeadphone.ratings}
      sellsNumber = {wiredHeadphone.sellsNumber}
      name={wiredHeadphone.name}
      brand={wiredHeadphone.brand}
      price={wiredHeadphone.price}
    />
  ));

  return (
    <div className='flex-row mt-5'>
      <h1 className='text-3xl ml-16 font-medium font-Myfont'>Watches</h1>
      <Card>
        {wiredHeadphonelist}
      </Card>
    </div>
  );
}

export default WiredHeadphone;