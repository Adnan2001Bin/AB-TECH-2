import React from 'react';
import CardProduct from '../CardProduct';
import Card from '../../UI/Card';
import { useEffect,useState } from 'react';
import { ScaleLoader } from 'react-spinners';

function Speaker() {
  const [speakers, setSpeakers] = useState([]);
  const [isLoding , setIsLoading] = useState(true)


  useEffect(() => {
    const fetcSpeakers = async () => {
      const response = await fetch(
        'https://tech-540cd-default-rtdb.firebaseio.com/speakers.json'
      );
      const responseData = await response.json();

      const loadedSpeakers = [];

      for (const key in responseData) {
        loadedSpeakers.push({
          id: key,
          img: responseData[key].img,
          ratings: responseData[key].ratings,
          sellsNumber: responseData[key].sellsNumber,
          name: responseData[key].name,
          brand: responseData[key].brand,
          price: responseData[key].price,
        });
      }
      setSpeakers(loadedSpeakers)
      setIsLoading(false)
    };

    fetcSpeakers();
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


  const speakerlist = speakers.map((speaker) => (
    <CardProduct
      key={speaker.id}
      id={speaker.id}
      img={speaker.img}
      ratings = {speaker.ratings}
      sellsNumber = {speaker.sellsNumber}
      name={speaker.name}
      brand={speaker.brand}
      price={speaker.price}
    />
  ));

  return (
    <div className='flex-row mt-5'>
      <h1 className='text-3xl ml-16 font-medium font-Myfont'>Speaker</h1>
      <Card>
        {speakerlist}
      </Card>
    </div>
  );
}

export default Speaker;