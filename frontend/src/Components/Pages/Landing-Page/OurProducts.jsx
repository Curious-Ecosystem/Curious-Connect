import React from 'react';
import CDC from '../../../assets/Landing-Page-Assets/CDC.jpg';
import Curious from '../../../assets/Landing-Page-Assets/Curious Ecosystem.png';
import Inspiration from '../../../assets/Landing-Page-Assets/Inspiration.jpg';
const OurProducts = () => {
  //Product Data
  const ProductData = [
    {
      productImg: Inspiration,
      productName: 'Inspiration App',
    },
    {
      productImg: CDC,
      productName: 'Curious Community',
    },
    {
      productImg: Curious,
      productName: 'Curious Ecosystem',
    },
  ];

  return (
    <div className='w-full h-full text-cyan-50 text-center'>
      <h1 className='font-normal text-3xl font-poppins p-3'>
        View Other Products
      </h1>
      <div className='flex flex-wrap justify-evenly mt-8 gap-3'>
        <div>
          <img
            src={Curious}
            className='w-44 rounded-full shadow-slate-400 shadow-[0_0_20px_5px]'
          />
          <p className='mt-5 font-bold font-2xl'>Curious Ecosystem</p>
        </div>
        <div>
          <img
            src={CDC}
            className='w-44 rounded-full shadow-slate-400 shadow-[0_0_20px_5px]'
          />
          <p className='mt-5 font-bold font-2xl'>Curious Community</p>
        </div>

        <div>
          <img
            src={Inspiration}
            className='w-44 rounded-full shadow-slate-400 shadow-[0_0_20px_5px]'
          />
          <p className='mt-5 font-bold font-2xl'>Inspiration APP</p>
        </div>

        {/* {ProductData.map((product, index) => (
					<div
						key={index}
						className="mt-10 m-3 flex flex-col justify-center items-center">
						<img
							src={product.productImg}
							alt={product.productName}
							className="w-44 rounded-full shadow-slate-400 shadow-[0_0_20px_5px]"
						/>
						<p className="font-semibold mt-8 text-2xl">{product.productName}</p>
					</div>
				))} */}
      </div>
    </div>
  );
};

export default OurProducts;
