import React from "react";

import ai from "../../../assets/Landing-Page-Assets/ai.png";
import letter from "../../../assets/Landing-Page-Assets/letter.png";
import encrypted from "../../../assets/Landing-Page-Assets/encrypted.png";
import privacy from "../../../assets/Landing-Page-Assets/privacy.png";

const featuresData = [
	{
		icon: ai,
		title: "AI Chatbot",
		description:
			"Engage with our AI chatbot directly inside the meet and get your doubt clarified",
	},
	{
		icon: letter,
		title: "Interactive White Board",
		description: "Have realistic interaction with interactive white board",
	},
	{
		icon: encrypted,
		title: "End to End Encryption",
		description: "Enjoy seamless collaboration with end to end encryption",
	},
	{
		icon: privacy,
		title: "Privacy Protection",
		description:
			"Enjoy seamless collaboration without compromising on privacy or security concerns",
	},
];
const Feature = () => {
	return (
		<>
		<div className="my-16 flex justify-evenly items-center gap-3">
		 <div className="w-[250px] rounded-lg border bg-white  shadow-blue-400 shadow-[0_0_6px_3px]">
      <img 
        src="https://st5.depositphotos.com/55541054/67076/i/450/depositphotos_670765480-stock-photo-explore-digital-frontier-chatbot-futuristic.jpg"
        alt="Laptop"
        className="h-[160px] w-full rounded-md object-cover"
      />
      <div className="p-4 flex flex-col items-center justify-center">
        <h1 className="text-lg font-semibold  ">AI CHATBOT</h1>
        <p className="mt-2 text-sm text-white-600 p-1">
          Enagage with our AI chatbot directly inside the meet and get your doubt clarified
        </p>
        <button
          type="button"
          className="mt-2 rounded-lg bg-blue-600 p-2 text-[13px] font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
	<div className="w-[250px] rounded-lg border  shadow-blue-400 shadow-[0_0_6px_3px]">
      <img
        src="https://www.ismartrecruit.com/upload/blog/main_image/Online_team_building_fun_interactive.webp"
        alt="Team work"
        className="h-[160px] w-full rounded-md object-cover"
      />
      <div className="p-4 flex flex-col items-center justify-center bg-white">
        <h1 className="text-lg font-semibold  ">Remote Interaction</h1>
        <p className="mt-2 text-sm text-white-600 p-1">
          We  help to connect people virtually for office meetings or school classes
        </p>
        <button
          type="button"
          className="mt-2 rounded-md bg-blue-600 p-2 text-[13px] font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
	<div className="w-[250px] rounded-lg border  shadow-blue-400 shadow-[0_0_6px_3px]">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5cvddIaEk0o0jkC_87lqusobcw6UFvYPXa6jkvkm0g&s"
        alt="Laptop"
        className="h-[160px] w-full rounded-md object-cover"
      />
      <div className="p-4 flex flex-col items-center justify-center bg-white">
        <h1 className="text-lg font-semibold  ">Secured Authentication</h1>
        <p className="mt-2 text-sm text-white-600 p-1">
          We provide the user a secured authentication to access things accordingly.
        </p>
        <button
          type="button"
          className="mt-2 rounded-md bg-blue-600 p-2 text-[13px] font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
	<div className="w-[250px] rounded-md border  shadow-blue-400 shadow-[0_0_6px_3px]">
      <img
        src="https://act-on.com/wp-content/uploads/2021/08/Privacy-Blog-V3.png"
        alt="Laptop"
        className="h-[160px] w-full rounded-md object-cover"
      />
      <div className="p-4 flex flex-col items-center justify-center bg-white">
        <h1 className="text-lg font-semibold  ">Privacy Protection</h1>
        <p className="mt-2 text-sm text-white-600 p-1">
          Enjoy seemless collaboration without compromising on privacy.
        </p>
        <button
          type="button"
          className="mt-2 rounded-md bg-blue-600 p-2 text-[13px] font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
	</div>
		</>
	);
};

export default Feature;
