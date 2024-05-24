import React from 'react';
import CardProduct from '../CardProduct';
import Card from '../../UI/Card';
import { useEffect,useState } from 'react';
import { ScaleLoader } from 'react-spinners';


function MacBook() {
  const [macBooks, setMacBooks] = useState([]);
  const [isLoding , setIsLoading] = useState(true)


  useEffect(() => {
    const fetcMacBooks = async () => {
      const response = await fetch(
        'https://tech-540cd-default-rtdb.firebaseio.com/MacBooks.json'
      );
      const responseData = await response.json();

      const loadedMacBooks = [];

      for (const key in responseData) {
        loadedMacBooks.push({
          id: key,
          img: responseData[key].img,
          ratings: responseData[key].ratings,
          sellsNumber: responseData[key].sellsNumber,
          name: responseData[key].name,
          brand: responseData[key].brand,
          price: responseData[key].price,
        });
      }
      setMacBooks(loadedMacBooks)
      setIsLoading(false)
    };

    fetcMacBooks();
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


  const MacBookslist = macBooks.map((laptop) => (
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
        {MacBookslist}
      </Card>
    </div>
  );
}

export default MacBook;