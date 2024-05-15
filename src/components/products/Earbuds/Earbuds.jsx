import React from 'react';
import CardProduct from '../CardProduct';
import Card from '../../UI/Card';
import { useEffect,useState } from 'react';
import { ScaleLoader } from 'react-spinners';


function Earbuds() {
  const [earbuds, setEarbuds] = useState([]);
  const [isLoding , setIsLoading] = useState(true)


  useEffect(() => {
    const fetcEarbuds = async () => {
      const response = await fetch(
        'https://tech-540cd-default-rtdb.firebaseio.com/earbuds.json'
      );
      const responseData = await response.json();

      const loadedEarbuds = [];

      for (const key in responseData) {
        loadedEarbuds.push({
          id: key,
          img: responseData[key].img,
          ratings: responseData[key].ratings,
          sellsNumber: responseData[key].sellsNumber,
          name: responseData[key].name,
          brand: responseData[key].brand,
          price: responseData[key].price,
        });
      }
      setEarbuds(loadedEarbuds)
      setIsLoading(false)
    };

    fetcEarbuds();
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



  const earbudslist = earbuds.map((earbud) => (
    <CardProduct
      key={earbud.id}
      id={earbud.id}
      img={earbud.img}
      ratings = {earbud.ratings}
      sellsNumber = {earbud.sellsNumber}
      name={earbud.name}
      brand={earbud.brand}
      price={earbud.price}
    />
  ));

  return (
    <div className='flex-row mt-5'>
      <h1 className='text-3xl ml-16 font-medium font-Myfont'>Earbuds</h1>
      <Card>
        {earbudslist}
      </Card>
    </div>
  );
}

export default Earbuds;