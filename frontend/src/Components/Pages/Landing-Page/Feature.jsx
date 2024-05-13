import React from "react";
import dummyImage from '../../../assets/Home-Page-Assets/dummy_image.png';


const Feature = () => {
  return (
    <div className="w-full h-full  text-cyan-50 text-2xl text-center px-28 mt-10">
      <h2 className="text-3xl font-semibold tracking-tight">Curious Connect Connect Attributes</h2>
      <p className="text-[1.3vw] tracking-tighter text-gray-400 leading-6 pt-2">With SFU integrated  server. We engineered a platform with maximum vedio quality lowest latency that makes your calls <br /> crystal clear. Compatible with all browers ad platforms!</p>
      <div className="featured-card text-black flex gap-12 pt-10">
        <div className="card h-72 w-72 bg-slate-50 rounded-lg">
          <img className="h-12 m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3JewpRnAKvAJJbTVLDRU6r7ESSdS0qA-kwt9GtOWmZJfV97GOqj3VwlXFR9PmC-p58I&usqp=CAU" alt="" />
          <h2 className="text-xl tracking-tighter font-bold text-left pl-5 mt-12">AI ChatBot</h2>
          <h5 className="text-sm font-semibold text-left px-5 text-gray-500">Engage with our AI chatbot dirextly inside the meet and get your doubt clarified</h5>
        </div>
        <div className="card h-72 w-72  bg-slate-50 rounded-lg">
          <img className="h-12 m-2" src="https://cdn-icons-png.flaticon.com/128/1027/1027530.png" alt="" />
          <h2 className="text-xl tracking-tighter font-bold text-left pl-5 mt-12">Intractive White Board</h2>
          <h5 className="text-sm font-semibold text-left px-5 text-gray-500">Have realistic interaction with interactive white board</h5>
        </div>
        <div className="card h-72 w-72 bg-slate-50 rounded-lg">
          <img className="h-12 m-2" src="https://static.gameloop.com/img/5b93d1a787753bf25253b5e586fcb362.png?imageMogr2/thumbnail/172.8x172.8/format/webp" alt="" />
          <h2 className="text-xl tracking-tighter font-bold text-left pl-5 mt-12">End to End Encryption</h2>
          <h5 className="text-sm font-semibold text-left px-5 text-gray-500">Enjoy seamless collaboration with end to end encryption</h5>
        </div>
        <div className="card h-72 w-72 bg-slate-50 rounded-lg">
          <img className="h-12 m-2" src="https://cdn-icons-png.freepik.com/512/7928/7928608.png" alt="" />
          <h2 className="text-xl tracking-tighter font-bold text-left pl-5 mt-12">Privacy Protection</h2>
          <h5 className="text-sm font-semibold text-left px-5 text-gray-500 ">Enjoy seamless collaboration without compromisting on privacy or security concerns.</h5>
        </div>
      </div>
    </div>
  );
};

export default Feature;
