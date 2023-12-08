import React, { useState, useEffect } from 'react';


const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  // const [count4, setCount4] = useState(0);

  

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prevCount) => Math.min(prevCount + 1, 23));
    }, 1000); // Decreased interval duration for faster increment
    return () => clearInterval(interval1);
  }, []);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCount2((prevCount) => Math.min(prevCount + 1, 25));
    }, 1000); // Decreased interval duration for faster increment

    return () => clearInterval(interval2);
  }, []);

  useEffect(() => {
    const interval3 = setInterval(() => {
      setCount3((prevCount) => Math.min(prevCount + 1, 13));
    }, 1000); // Decreased interval duration for faster increment

    return () => clearInterval(interval3);
  }, []);

  // useEffect(() => {
  //   const interval4 = setInterval(() => {
  //     setCount4((prevCount) => Math.min(prevCount + 1, 200));
  //   }, 1500); // Decreased interval duration for faster increment

  //   return () => clearInterval(interval4);
  // }, []);

  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:px-auto w-full md:ml-24 mt-2'>
      <div className='text-center md:text-left mb-4 mt-1 md:mb-0 md:mr-36'>
        <span className='text-6xl font-bold text-myblue'>{count1}</span>
        <span className='text-6xl font-bold text-blue-400 ml-2 md:mr-2'>+</span>
        <p className='text-countertext text-2xl '>Year Of <br />experience</p>
      </div>
      <div className='text-center md:text-left md:mb-0 md:mr-36'>
        <span className='text-6xl font-bold text-myblue'>{count2}</span>
        <span className='text-6xl font-bold text-blue-400 ml-2 md:mr-2'>+</span>
        <p className='text-countertext text-2xl '>Cross<br /> successfully raised</p>
      </div>
      <div className='text-center md:text-left mb-4 md:mb-0 md:mr-36'>
        <span className='text-6xl font-bold text-myblue'>{count3}</span>
        <span className='text-6xl font-bold text-blue-400 ml-2 md:mr-2'>+</span>
        <p className='text-countertext text-2xl '>Projects<br />fully funded</p>
      </div>
      <div className='text-center md:text-left'>
        <span className='text-6xl font-bold text-myblue'>200</span>
        <span className='text-6xl font-bold text-blue-400 ml-2 md:mr-2'>%</span>
        <p className='text-countertext text-2xl '>Year On Year<br />growth</p>
      </div>
    </div>
  );
};

export default Counter;
