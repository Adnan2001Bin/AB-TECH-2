import React from 'react';
import CardProduct from '../CardProduct';
import Card from '../../UI/Card';
import { useEffect,useState } from 'react';
import { ScaleLoader } from 'react-spinners';


function Neckbands() {
  const [neckbands, setNeckbands] = useState([]);
  const [isLoding , setIsLoading] = useState(true)


  useEffect(() => {
    const fetcNeckband = async () => {
      const response = await fetch(
        'https://tech-540cd-default-rtdb.firebaseio.com/neckbands.json'
      );
      const responseData = await response.json();

      const loadedNeckbands = [];

      for (const key in responseData) {
        loadedNeckbands.push({
          id: key,
          img: responseData[key].img,
          ratings: responseData[key].ratings,
          sellsNumber: responseData[key].sellsNumber,
          name: responseData[key].name,
          brand: responseData[key].brand,
          price: responseData[key].price,
        });
      }
      setNeckbands(loadedNeckbands)
      setIsLoading(false)
    };

    fetcNeckband();
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


  const neckbandslist = neckbands.map((neckband) => (
    <CardProduct
      key={neckband.id}
      id={neckband.id}
      img={neckband.img}
      ratings = {neckband.ratings}
      sellsNumber = {neckband.sellsNumber}
      name={neckband.name}
      brand={neckband.brand}
      price={neckband.price}
    />
  ));

  return (
    <div className='flex-row mt-5'>
      <h1 className='text-3xl ml-16 font-medium font-Myfont'>PowerBanks</h1>
      <Card>
        {neckbandslist}
      </Card>
    </div>
  );
}

export default Neckbands;