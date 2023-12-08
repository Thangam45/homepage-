import React from 'react';
import building from '../../Assets/new building 1.png';
import Testimonial from '../../Assets/Testimonial circles.png';
import Counter from './Counter';
import Ourproject from './Ourproject';
import Funded from './Funded';


const Home = () => {
  return (
    <>
      <div className='bg-black  p-2'>
        <section className="flex flex-col-reverse md:flex-row">
          <div className='flex-1 text-center md:text-left'>
            <p className='text-mygreen  font-bold text-1xl px-4 py-1 md:px-24 mt-12'>Welcome! The Future Awaits You</p>
            <h1 className='text-white text-5xl  font-bold px-4  md:px-24 mt-1 '>Invest Beyond</h1>
            <h1 className='text-blue-600 text-8xl font-bold px-4 md:px-24 mt-2 md:mt-5'>BONDS</h1>
            <p className='text-white px-4 md:px-24 text-2xl mt-2 md:mt-5'>
              Embark On A Journey Into Alternative  </p>
            <p className='text-white px-4 md:px-24 text-2xl mt-2 md:mt-5'>Investments With Returns Starting<br /><br /> From 18%.
            </p>
            <button className='bg-mygreen py-3 px-7 mx-4 md:mx-24 mt-2 md:mt-5 rounded-half'>Explore Opportunities</button>
            <img src={Testimonial} className='py-3 px-5 mx-4 md:mx-16 mt-2 md:mt-5' alt='Testimonial' />
          </div>
          <div className='flex-2 '>
            <img src={building} className=' md:h-513 w-full md:w-681' alt='Building' />
          </div>
        </section>
      </div>
      <Counter />
      <Ourproject />
      <Funded />
    </>
  );
}

export default Home;
