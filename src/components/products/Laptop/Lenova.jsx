import React from 'react';
import CardProduct from '../CardProduct';
import Card from '../../UI/Card';
import { useEffect,useState } from 'react';
import { ScaleLoader } from 'react-spinners';


function Lenovo() {
  const [delllaptops, setDellLaptops] = useState([]);
  const [isLoding , setIsLoading] = useState(true)


  useEffect(() => {
    const fetcLDellaptops = async () => {
      const response = await fetch(
        'https://tech-540cd-default-rtdb.firebaseio.com/Lenovo.json'
      );
      const responseData = await response.json();

      const loadedDellLaptops = [];

      for (const key in responseData) {
        loadedDellLaptops.push({
          id: key,
          img: responseData[key].img,
          ratings: responseData[key].ratings,
          sellsNumber: responseData[key].sellsNumber,
          name: responseData[key].name,
          brand: responseData[key].brand,
          price: responseData[key].price,
        });
      }
      setDellLaptops(loadedDellLaptops)
      setIsLoading(false)
    };

    fetcLDellaptops();
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


  const laptopslist = delllaptops.map((laptop) => (
    <CardProduct
      key={laptop.id}
      id={laptop.id}
      img={laptop.img}
      ratings = {laptop.ratings}
      sellsNumber = {laptop.sellsNumber}
      name={laptop.name}
      brand={laptop.brand}
      price={laptop.price}
    />
  ));

  return (
    <div className='flex-row mt-5'>
      <h1 className='text-3xl ml-16 font-medium font-Myfont'>laptop</h1>
      <Card>
        {laptopslist}
      </Card>
    </div>
  );
}

export default Lenovo;