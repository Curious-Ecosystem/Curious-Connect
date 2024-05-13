import React from "react";

const featuresData = [
  {
    icon: "../../../media/ai.png",
    title: "AI Chatbot",
    description: "Engage with our AI chatbot directly inside the meet and get your doubt clarified"
  },
  {
    icon: "../../../media/letter.png",
    title: "Interactive White Board",
    description: "Have realistic interaction with interactive white board"
  },
  {
    icon: "../../../media/encrypted.png",
    title: "End to End Encryption",
    description: "Enjoy seamless collaboration with end to end encryption"
  },
  {
    icon: "../../../media/privacy.png",
    title: "Privacy Protection",
    description: "Enjoy seamless collaboration without compromising on privacy or security concerns"
  }
];

const Feature = () => {
  return (
    <div className="w-full h-full text-cyan-50 text-2xl text-center p-10 md:p-25 mt-10">
      <h5 className="w-full h-full text-cyan-50 text-2xl text-white p-3 font-semibold text-center">
        Curious Connect Unique Attributes
      </h5>
      <p className="text-lg font-normal text-gray-500 p-3">
        With SFU integrated server. We engineered a platform with maximum video quality lowest latency that makes your calls crystal clear. Compatible with all browsers and platforms!
      </p>
      <div className="m-4 grid gap-6 sm:grid-cols-2 md:grid-cols-4 ">
        {featuresData.map((feature, index) => (
          <div key={index} className="p-5 min-h-[100px] rounded-lg bg-white shadow">
            <img className="w-20 h-20 p-3" src={feature.icon} alt={feature.title} />
            <h5 className="mb-2 text-lg text-left font-semibold tracking-tight text-black">{feature.title}</h5>
            <p className="mb-3 font-normal text-base text-gray-500 text-ellipsis text-left ">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
