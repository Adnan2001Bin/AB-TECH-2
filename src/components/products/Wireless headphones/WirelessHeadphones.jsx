import React from 'react';
import CardProduct from '../CardProduct';
import Card from '../../UI/Card';
import { useEffect,useState } from 'react';
import { ScaleLoader } from 'react-spinners';


function WirelessHeadphone() {
  const [wirelessHeadphones, setWirelessHeadphones] = useState([]);
  const [isLoding , setIsLoading] = useState(true)


  useEffect(() => {
    const fetchWirelessHeadphones = async () => {
      const response = await fetch(
        'https://tech-540cd-default-rtdb.firebaseio.com/wirelessHeadphones.json'
      );
      const responseData = await response.json();

      const loadedWirelessHeadphones = [];

      for (const key in responseData) {
        loadedWirelessHeadphones.push({
          id: key,
          img: responseData[key].img,
          ratings: responseData[key].ratings,
          sellsNumber: responseData[key].sellsNumber,
          name: responseData[key].name,
          brand: responseData[key].brand,
          price: responseData[key].price,
        });
      }
      setWirelessHeadphones(loadedWirelessHeadphones)
      setIsLoading(false)
    };

    fetchWirelessHeadphones();
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


  const wirelessHeadphonelist = wirelessHeadphones.map((wirelessHeadphone) => (
    <CardProduct
      key={wirelessHeadphone.id}
      id={wirelessHeadphone.id}
      img={wirelessHeadphone.img}
      ratings = {wirelessHeadphone.ratings}
      sellsNumber = {wirelessHeadphone.sellsNumber}
      name={wirelessHeadphone.name}
      brand={wirelessHeadphone.brand}
      price={wirelessHeadphone.price}
    />
  ));

  return (
    <div className='flex-row mt-5'>
      <h1 className='text-3xl ml-16 font-medium font-Myfont'>WirelessHeadphone</h1>
      <Card>
        {wirelessHeadphonelist}
      </Card>
    </div>
  );
}

export default WirelessHeadphone;