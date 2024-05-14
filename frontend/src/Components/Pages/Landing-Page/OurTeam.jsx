import React from "react";
import CDC from "../../../assets/Landing-Page-Assets/CDC.jpg";
import Curious from '../../../assets/Landing-Page-Assets/Curious.jpeg';
import Inspiration from '../../../assets/Landing-Page-Assets/Inspiration.jpg';
const OurTeam = () => {

  //Product Data
  const ProductData = [
    {
      productImg: Inspiration,
      productName: "Inspiration App",
    },
    {
      productImg: CDC,
      productName: "Curious Community",
    },
    {
      productImg: Curious,
      productName: "Curious Ecosystem",
    }
  ]

  return (
    <div className="w-full h-full text-cyan-50 text-center">
      <h1 className="font-bold text-3xl">View Other Products</h1>
      <div className="flex flex-wrap justify-evenly mt-8">
      {ProductData.map((product, index) => (
        <div key={index} className="mt-10 m-3 flex flex-col justify-center items-center">
          <img src={product.productImg} alt={product.productName} className="w-44 rounded-full shadow-slate-400 shadow-[0_0_20px_5px]" />
          <p className="font-semibold mt-8 text-2xl">{product.productName}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default OurTeam;
