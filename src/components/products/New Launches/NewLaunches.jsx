import { Link } from "react-router-dom";
import "./NewLaunches.css"
import { useEffect, useState } from 'react';
import NewLaunchesCard from './NewLaunchesCard';

function NewLaunches() {
  const [newLaunches, setNewLaunches] = useState([]);

  useEffect(() => {
    const fetcNewLaunches = async () => {
      const response = await fetch(
        'https://tech-540cd-default-rtdb.firebaseio.com/newLaunches.json'
      );
      const responseData = await response.json();

      const loadedNewLaunches = [];

      for (const key in responseData) {
        loadedNewLaunches.push({
          id: key,
          img: responseData[key].img,
          ratings: responseData[key].ratings,
          sellsNumber: responseData[key].sellsNumber,
          name: responseData[key].name,
          feature: responseData[key].feature,
          price: responseData[key].price,
        });
      }
      setNewLaunches(loadedNewLaunches)
    };

    fetcNewLaunches();
  }, []);




  const newLaunchelist = newLaunches.map((newLaunche) => (
    <NewLaunchesCard
      key={newLaunche.id}
      id={newLaunche.id}
      img={newLaunche.img}
      ratings={newLaunche.ratings}
      sellsNumber={newLaunche.sellsNumber}
      name={newLaunche.name}
      feature={newLaunche.feature}
      price={newLaunche.price}
    />
  ));

  return (

    <div className='newLaunches ml-16 mt-8 w-11/12 cursor-pointer' >
      <div className="flex justify-between">
        <h1 className='text-3xl font-mono ml-4'>New <span className='font-semibold'>Launches</span></h1>

        <div className="flex mr-5 justify-between items-center">
          <Link to="./NewLaunchesItems"> <h1 className="font-bold text-blue-700">View all</h1></Link>

          <img className="w-5 h-5 ml-2" src="src\assets\right-arrow.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center">
        {newLaunchelist}
      </div>
    </div>


  );
}

export default NewLaunches;