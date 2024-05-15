import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import "./BestSellers.css";

function BestSellers() {
  const videoRefs = {
    video1: useRef(null),
    video2: useRef(null),
    video3: useRef(null),
    video4: useRef(null)
  };

  const handleMouseEnter = (videoRef) => {
    videoRef.current.play();
  };

  const handleMouseLeave = (videoRef) => {
    videoRef.current.pause();
  };

  return (
    <div className='ml-16 w-11/12'>
      <h1 className='text-3xl font-mono'>Explore <span className='font-semibold'>Bestsellers</span></h1>
      <div className='flex justify-between mt-5'>
        <Link className='video' to="/Earbuds">
          <video
            className='videoclip'
            ref={videoRefs.video1}
            controls={false}
            autoPlay={false}
            loop
            muted
            onMouseEnter={() => handleMouseEnter(videoRefs.video1)}
            onMouseLeave={() => handleMouseLeave(videoRefs.video1)}
            src="src\assets\quinn_Bejc8URjU1NSXdhabLCmD.mp4"
          ></video>
          <p className='text-center text-xl font-mono font-semibold'>Earbuds</p>
        </Link>


        <Link className='video' to="/WirelessHeadphones">
          <video
            className='videoclip'
            ref={videoRefs.video2}
            controls={false}
            autoPlay={false}
            loop
            muted
            onMouseEnter={() => handleMouseEnter(videoRefs.video2)}
            onMouseLeave={() => handleMouseLeave(videoRefs.video2)}
            src="src\assets\quinn_CpsRIdJWtpXyFN3enwbXd.mp4"
          ></video>
          <p className='text-center text-xl font-mono font-semibold'>Headphones</p>
        </Link>


        <Link className='video' to="/Neckbands">
          <video
            className='videoclip'
            ref={videoRefs.video3}
            controls={false}
            autoPlay={false}
            loop
            muted
            onMouseEnter={() => handleMouseEnter(videoRefs.video3)}
            onMouseLeave={() => handleMouseLeave(videoRefs.video3)}
            src="src\assets\quinn_OyJHanx4QSdUN3OVGTO7C.mp4"
          ></video>
          <p className='text-center text-xl font-mono font-semibold'>Neckbands</p>
        </Link>


        <Link className='video' to="/Watches">
          <video
            className='videoclip'
            ref={videoRefs.video4}
            controls={false}
            autoPlay={false}
            loop
            muted
            onMouseEnter={() => handleMouseEnter(videoRefs.video4)}
            onMouseLeave={() => handleMouseLeave(videoRefs.video4)}
            src="src\assets\quinn_RUxbhR7CvjkNtlFUDxgw9.mp4"
          ></video>
          <p className='text-center text-xl font-mono font-semibold'>Watches</p>
        </Link>


      </div>
    </div>
  );
}

export default BestSellers;
