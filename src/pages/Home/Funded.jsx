import React from 'react';
import Vector from '../../Assets/Vector 714.png';
import Rectangle2 from '../../Assets/Rectangle 2.png';
import Rectangle4 from '../../Assets/Rectangle 4.png';
import Rectangle5 from '../../Assets/Rectangle 5.png';

const Funded = () => {
  return (
    <>
      {/* Desktop Section */}
      <div className='md:flex md:items-center md:justify-between gap-8 md:px-10 lg:px-20 xl:px-32 hidden'>
        <h1 className='text-5xl font-bold md:ml-96 md:mr-auto md:text-left'>Successfully Funded</h1>
        <div className='md:flex md:items-center gap-3'>
          <p className='hidden text-2xl md:block'>Explore all</p>
          <img src={Vector} alt="Explore All" className='w-6 h-6 md:w-auto md:h-auto' />
        </div>
      </div>

      <hr className='md:ml-96 md:mr-auto mt-3 h-0.5 bg-mygreen hidden md:block' />

      {/* Mobile Section */}
      <div className='md:hidden px-8 lg:px-20 xl:px-32'>
        <h1 className='text-5xl font-bold text-center mt-6'>Successfully Funded</h1>
        <div className='flex items-center justify-center mt-3'>
          <p className='text-2xl'>Explore all</p>
          <img src={Vector} alt="Explore All" className='w-6 h-6 ml-2' />
        </div>
        <hr className='mt-3 h-0.5 bg-mygreen' />
      </div>

      {/* Funding Sections */}
      <div className='flex flex-col md:flex-row md:items-end md:justify-between md:mt-9 md:gap-8 md:px-10 lg:px-20 xl:px-32'>
        {/* Section 1 */}
        <div className='w-full md:w-1/3 h-64 md:mx-5 relative overflow-hidden'>
          <img src={Rectangle5} alt="Section 1" className='w-full h-full object-cover' />
          <button className='absolute bottom-0 left-0 text-1xl font-bold text-black bg-mygreen p-2'>Fully Funded</button>
        </div>

        {/* Section 2 */}
        <div className='w-full md:w-1/3 h-64 md:mx-5 relative overflow-hidden mt-4 md:mt-0'>
          <img src={Rectangle4} alt="Section 2" className='w-full h-full object-cover' />
          <button className='absolute bottom-0 left-0 text-1xl font-bold text-black bg-mygreen p-2'>Fully Funded</button>
        </div>

        {/* Section 3 */}
        <div className='w-full md:w-1/3 h-64 md:mx-5 relative overflow-hidden mt-4 md:mt-0'>
          <img src={Rectangle2} alt="Section 3" className='w-full h-full object-cover' />
          <button className='absolute bottom-0 left-0 text-1xl font-bold text-black bg-mygreen p-2'>Fully Funded</button>
        </div>
      </div>

      {/* Additional div with "Rio Global v LLp" content */}
      <div className='bg-black mt-8 md:mt-0'>
        <div className='md:flex md:items-center md:justify-between gap-8 md:px-8 lg:px-20 xl:px-32'>
          {/* Content 1 */}
          <div className='flex flex-col w-full h-full object-cover p-9 bg-white text-black'>
            <h1 className='text-xl font-bold p-2'>Rio Global V LLP</h1>
            <p>Nearby To Green Airport</p>
            <hr className='h-0.5 md:ml-16 md:mr-16 bg-black ' />
          </div>

          {/* Content 2 */}
          <div className='flex flex-col w-full h-full object-cover p-9 bg-white text-black'>
            <h1 className='text-xl font-bold p-2'>Rio Global V LLP</h1>
            <p>Nearby To Green Airport</p>
            <hr className='h-0.5 md:ml-16 md:mr-16 bg-black' />
          </div>

          {/* Content 3 */}
          <div className='flex flex-col w-full h-full object-cover p-9 ml-0.5 bg-white text-black'>
            <h1 className='text-xl font-bold p-2 '>Rio Global V LLP</h1>
            <p>Nearby To Green Airport</p>
            <hr className='h-0.5 md:ml-16 md:mr-16 bg-black' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Funded;
