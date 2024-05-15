import React from 'react';
import CardProduct from '../CardProduct';
import Card from '../../UI/Card';
import { useEffect,useState } from 'react';
import { ScaleLoader } from 'react-spinners';


function PowerBank() {
  const [powerBanks, setPowerBanks] = useState([]);
  const [isLoding , setIsLoading] = useState(true)

  useEffect(() => {
    const fetcPowerBank = async () => {
      const response = await fetch(
        'https://tech-540cd-default-rtdb.firebaseio.com/powerBanks.json'
      );
      const responseData = await response.json();

      const loadedPowerBanks = [];

      for (const key in responseData) {
        loadedPowerBanks.push({
          id: key,
          img: responseData[key].img,
          ratings: responseData[key].ratings,
          sellsNumber: responseData[key].sellsNumber,
          name: responseData[key].name,
          brand: responseData[key].brand,
          price: responseData[key].price,
        });
      }
      setPowerBanks(loadedPowerBanks)
      setIsLoading(false)
    };

    fetcPowerBank();
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



  const powerBanklist = powerBanks.map((powerBank) => (
    <CardProduct
      key={powerBank.id}
      id={powerBank.id}
      img={powerBank.img}
      ratings = {powerBank.ratings}
      sellsNumber = {powerBank.sellsNumber}
      name={powerBank.name}
      brand={powerBank.brand}
      price={powerBank.price}
    />
  ));

  return (
    <div className='flex-row mt-5'>
      <h1 className='text-3xl ml-16 font-medium font-Myfont'>PowerBanks</h1>
      <Card>
        {powerBanklist}
      </Card>
    </div>
  );
}

export default PowerBank;