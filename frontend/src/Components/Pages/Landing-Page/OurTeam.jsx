import React from "react";

const OurTeam = () => {
  return (
    <div className="w-full h-full py-24 text-cyan-50 text-2xl text-center">
      <h2 className="text-[2.1vw] font-[500] pb-8 tracking-tight">View Other Products</h2>
      <div className="view-cont flex justify-between px-56">
        <div className="img1">
          <img className="rounded-full h-54 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrz4p1Z57tTrqNOcc75zKgxGrd7bIF_Iagu9FiHI21jCnAeALaQm39kT0bS8ur2KkDjS0&usqp=CAU" alt="" />
          <h4 className="text-[1.2vw] font-semibold">Inspiration App</h4>
        </div>
        <div className="img2">
          <img className="rounded-full h-54 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx3ttwD7-4rQqFQpHyS3iH5J4LS2-wBVxOX3YVwexnbbJajr1AVmIID1wjsYICNg7hwuo&usqp=CAU" alt="" />
          <h4 className="text-[1.2vw] font-semibold">Curious Community</h4>
        </div>
        <div className="img3">
          <img className="rounded-full h-56 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65m17dxrdZoZYgjkHJ5VDCDK9DYilmR2L9mNKv0YqzZVrXiEO-xcC0mOejKCe8GON8LY&usqp=CAU" alt="" />
          <h4 className="text-[1.2vw] font-semibold">Curious Ecosysytem</h4>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
