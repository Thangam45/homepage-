import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rectangle from '../../Assets/Rectangle 3 (1).png';
import { FaStar, FaAccusoft } from 'react-icons/fa';

const Section1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className='md:w-full md:ml-14 md:mb-4'>
      <div className="bg-white mt-10 mx-auto md:ml-12 px-1">
        <section className="flex flex-col-reverse md:flex-row mb-8">
          <div className="w-full md:w-full md:mb-0">
            <h1 className="text-black-300 text-5xl font-bold mb-2">Our Current<br />Projects</h1>
            <hr className='bg-mygreen h-1 w-48 my-5' />
            <div className='flex items-center mb-2'>
              <FaAccusoft className='text-blue-400 text-sm mr-2' />
              <p className='text-blue-400 text-base'>Funding is filling fast</p>
            </div>
            <div className='flex items-center'>
              <FaAccusoft className='text-blue-400 text-sm mr-2' />
              <p className='text-blue-400 text-sm'>Higher returns on the go</p>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="w-full">
              <Slider {...settings}>
                {/* Slide 1 */}
                <div className='w-1'>
                <div className='bg-slidevlue rounded-md ht-5   mr-[300px] md:ml-2'>
                  <div className='flex'>
                    <div className="flex flex-col items-center mb-3 md:flex-row"> 
                      <img src={Rectangle} alt="Slide 1" className="h-503 w-229" />
                      <div className='border-blue-500 rounded-[18px] md:mr-2'>
                        <div className="rounded bg-black ht-1 py-6 p-4">
                          <div className="flex justify-end  hb-9 ml-2 mb-6">
                            <button className="bg-mygreen   text-sm rounded-md mb-1">
                              Capital Protected
                            </button>
                            <button className="bg-mygreen  mx-3 text-sm  rounded-md mb-1">Trending</button>
                          </div>
                          <p className="text-mygreen px-7 text-sm md:mb-0">Real Estate</p>
                          <div className="md:ml-0 px-7">
                            <h1 className='text-white text-1xl'>CRE-II</h1>
                            <p className='text-gray-500'>Mappedu</p>
                            <div className='flex'>
                              <h1 className='text-1xl text-white'>1.2 Crore</h1>
                              <div className="flex ml-2 mt-3 md:ml-24 px-5">
                                {[1, 2, 3, 4, 5].map((_, index) => (
                                  <FaStar key={index} className='text-white' />
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center">
                              <p className='text-mygreen text-sm'>Raised</p>
                            </div>
                            <br />
                            <div className='flex flex-col md:flex-row md:mr-3'>
                              <p className='px-1 text-sm text-white'>DESCRIPTION</p>
                              <p className='px-4 text-sm text-white'>NEAR BY</p>
                              <p className='px-4 text-sm text-white'>MAP</p>
                            </div>
                            <hr className='bg-black-700 text-white' />
                            <p className='text-gray-600 text-sm'>
                              Commercial warehouse located in the prime<br /> location of Sriperumbudur.<br /> Waiting to be fully funded...
                              <span className='text-blue-400'> read more</span>
                            </p>
                            <br />
                            <div className='flex flex-col md:flex-row mb-0 text-white gap-3'>
                              <p className='px-2 text-sm'>ROI %</p>
                              <p className='px-7 text-sm'>TENURE</p>
                              <p className='px-1 text-sm'>MIN INVESTING</p>
                            </div>
                            <div className='flex gap-6 mt-4 md:mt-0'>
                              <button className='bg-gray-600 rounded-2xl px-4 py-2 text-sm'>18% PA</button>
                              <button className='bg-gray-600 rounded-2xl px-7 py-2 text-sm'>4 Yr</button>
                              <button className='bg-gray-600 rounded-2xl px-7 py-2 text-sm'>1 Lakh</button>
                            </div>
                            <br />
                            <button className='bg-black border-mygreen border text-sm font-bold rounded-2xl text-white py-1 px-24'>INVEST NOW</button>
                            <br />
                            <br />
                            <button className='bg-mygreen rounded-2xl text-white text-sm font-bold px-28 py-1'>TALK TO US</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>

                {/* Slide 2 */}
                <div className='w-1'>
                <div className='bg-slidevlue rounded-md ht-5   mr-[300px] md:ml-2'>
                  <div className='flex'>
                    <div className="flex flex-col items-center mb-3 md:flex-row"> 
                      <img src={Rectangle} alt="Slide 1" className="h-503 w-229" />
                      <div className='border-blue-500 rounded-[18px] md:mr-2'>
                        <div className="rounded bg-black py-6 p-4">
                          <div className="flex justify-end ml-2 mb-6">
                            <button className="bg-mygreen   text-sm rounded-md mb-1">
                              Capital Protected
                            </button>
                            <button className="bg-mygreen  mx-3 text-sm  rounded-md mb-1">Trending</button>
                          </div>
                          <p className="text-mygreen px-7 text-sm md:mb-0">Real Estate</p>
                          <div className="md:ml-0 px-7">
                            <h1 className='text-white text-1xl'>CRE-II</h1>
                            <p className='text-gray-500'>Mappedu</p>
                            <div className='flex'>
                              <h1 className='text-1xl text-white'>1.2 Crore</h1>
                              <div className="flex ml-2 mt-3 md:ml-24 px-5">
                                {[1, 2, 3, 4, 5].map((_, index) => (
                                  <FaStar key={index} className='text-white' />
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center">
                              <p className='text-mygreen text-sm'>Raised</p>
                            </div>
                            <br />
                            <div className='flex flex-col md:flex-row md:mr-3'>
                              <p className='px-1 text-sm text-white'>DESCRIPTION</p>
                              <p className='px-4 text-sm text-white'>NEAR BY</p>
                              <p className='px-4 text-sm text-white'>MAP</p>
                            </div>
                            <hr className='bg-black-700 text-white' />
                            <p className='text-gray-600 text-sm'>
                              Commercial warehouse located in the prime<br /> location of Sriperumbudur.<br /> Waiting to be fully funded...
                              <span className='text-blue-400'> read more</span>
                            </p>
                            <br />
                            <div className='flex flex-col md:flex-row mb-0 text-white gap-3'>
                              <p className='px-2 text-sm'>ROI %</p>
                              <p className='px-7 text-sm'>TENURE</p>
                              <p className='px-1 text-sm'>MIN INVESTING</p>
                            </div>
                            <div className='flex gap-6 mt-4 md:mt-0'>
                              <button className='bg-gray-600 rounded-2xl px-4 py-2 text-sm'>18% PA</button>
                              <button className='bg-gray-600 rounded-2xl px-7 py-2 text-sm'>4 Yr</button>
                              <button className='bg-gray-600 rounded-2xl px-7 py-2 text-sm'>1 Lakh</button>
                            </div>
                            <br />
                            <button className='bg-black border-mygreen border text-sm font-bold rounded-2xl text-white py-1 px-24'>INVEST NOW</button>
                            <br />
                            <br />
                            <button className='bg-mygreen rounded-2xl text-white text-sm font-bold px-28 py-1'>TALK TO US</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                {/* Add more slides as needed */}
      
                {/* Content for slide 2 */}
                <div className='w-1'>
                <div className='bg-slidevlue rounded-md md:ht-5   md:mr-[300px] md:ml-2'>
                  <div className='flex flex-col md:flex-row'>
                    <div className="flex flex-col items-center mb-3 md:flex-row"> 
                      <img src={Rectangle} alt="Slide 1" className="h-503 w-229" />
                      <div className='md:border-blue-500 md:rounded-[18px]'>
                        <div className="rounded bg-black py-6 p-4">
                          <div className="flex justify-end md:ml-2 mb-6">
                            <button className="bg-mygreen text-sm rounded-md mb-1">
                              Capital Protected
                            </button>
                            <button className="bg-mygreen  mx-3 text-sm  rounded-md mb-1">Trending</button>
                          </div>
                          <p className="text-mygreen px-7 text-sm md:mb-0">Real Estate</p>
                          <div className="md:ml-0 px-7">
                            <h1 className='text-white text-1xl'>CRE-II</h1>
                            <p className='text-gray-500'>Mappedu</p>
                            <div className='flex'>
                              <h1 className='text-1xl text-white'>1.2 Crore</h1>
                              <div className="flex ml-2 mt-3 md:ml-24 px-5">
                                {[1, 2, 3, 4, 5].map((_, index) => (
                                  <FaStar key={index} className='text-white' />
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center">
                              <p className='text-mygreen text-sm'>Raised</p>
                            </div>
                            <br />
                            <div className='flex flex-col md:flex-row md:mr-3'>
                              <p className='px-1 text-sm text-white'>DESCRIPTION</p>
                              <p className='px-4 text-sm text-white'>NEAR BY</p>
                              <p className='px-4 text-sm text-white'>MAP</p>
                            </div>
                            <hr className='bg-black-700 text-white' />
                            <p className='text-gray-600 text-sm'>
                              Commercial warehouse located in the prime<br /> location of Sriperumbudur.<br /> Waiting to be fully funded...
                              <span className='text-blue-400'> read more</span>
                            </p>
                            <br />
                            <div className='flex flex-col md:flex-row mb-0 text-white gap-3'>
                              <p className='px-2 text-sm'>ROI %</p>
                              <p className='px-7 text-sm'>TENURE</p>
                              <p className='px-1 text-sm'>MIN INVESTING</p>
                            </div>
                            <div className='flex gap-6 mt-4 md:mt-0'>
                              <button className='bg-gray-600 rounded-2xl px-4 py-2 text-sm'>18% PA</button>
                              <button className='bg-gray-600 rounded-2xl px-7 py-2 text-sm'>4 Yr</button>
                              <button className='bg-gray-600 rounded-2xl px-7 py-2 text-sm'>1 Lakh</button>
                            </div>
                            <br />
                            <button className='bg-black border-mygreen border text-sm font-bold rounded-2xl text-white py-1 px-24'>INVEST NOW</button>
                            <br />
                            <br />
                            <button className='bg-mygreen rounded-2xl text-white text-sm font-bold px-28 py-1'>TALK TO US</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
  
                {/* Add more slides as needed */}
                
              </Slider>
            </div>

          </div>
        </section>
        {/* Section 2 */}
        
      </div>
      </div>
  );
};

export default Section1;
