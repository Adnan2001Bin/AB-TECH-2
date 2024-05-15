import React from 'react';
import CardProduct from '../CardProduct';
import Card from '../../UI/Card';
import { useEffect,useState } from 'react';
import { ScaleLoader } from 'react-spinners';


function WiredEarphones() {
  const [wiredEarphones, setWiredEarphones] = useState([]);
  const [isLoding , setIsLoading] = useState(true)


  useEffect(() => {
    const fetchWiredEarphones = async () => {
      const response = await fetch(
        'https://tech-540cd-default-rtdb.firebaseio.com/wiredEarphones.json'
      );
      const responseData = await response.json();

      const loadedWiredEarphones = [];

      for (const key in responseData) {
        loadedWiredEarphones.push({
          id: key,
          img: responseData[key].img,
          ratings: responseData[key].ratings,
          sellsNumber: responseData[key].sellsNumber,
          name: responseData[key].name,
          brand: responseData[key].brand,
          price: responseData[key].price,
        });
      }
      setWiredEarphones(loadedWiredEarphones)
      setIsLoading(false)
    };

    fetchWiredEarphones();
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




  const wiredEarphonelist = wiredEarphones.map((wiredEarphone) => (
    <CardProduct
      key={wiredEarphone.id}
      id={wiredEarphone.id}
      img={wiredEarphone.img}
      ratings = {wiredEarphone.ratings}
      sellsNumber = {wiredEarphone.sellsNumber}
      name={wiredEarphone.name}
      brand={wiredEarphone.brand}
      price={wiredEarphone.price}
    />
  ));

  return (
    <div className='flex-row mt-5'>
      <h1 className='text-3xl ml-16 font-medium font-Myfont'>Wired Earphone</h1>
      <Card>
        {wiredEarphonelist}
      </Card>
    </div>
  );
}

export default WiredEarphones;