import React from 'react';

const featuresData = [
	{
		icon: '/src/assets/Landing-Page-Assets/ai.png',
		title: 'AI Chatbot',
		description:
		'Engage with our AI chatbot directly inside the meet and get your doubt clarified',
	},
	{
		icon: '/src/assets/Landing-Page-Assets/letter.png',
		title: 'Interactive White Board',
		description: 'Have realistic interaction with interactive white board',
	},
	{
		icon: '/src/assets/Landing-Page-Assets/encrypted.png',
		title: 'End to End Encryption',
		description: 'Enjoy seamless collaboration with end to end encryption',
	},
	{
		icon: '/src/assets/Landing-Page-Assets/privacy.png',
		title: 'Privacy Protection',
		description:
		'Enjoyseamless collaboration without compromising on privacy or security concerns',
	},
];
	
const Feature = () => {
	return (
		<>
			<div className="my-12 flex justify-evenly items-center gap-10 lg:flex flex-wrap  ">

				<div className="w-[250px] h-[300px] rounded-lg border bg-white  shadow-blue-400 shadow-[0_0_6px_3px] gap-5">
					<img src="https://st5.depositphotos.com/55541054/67076/i/450/depositphotos_670765480-stock-photo-explore-digital-frontier-chatbot-futuristic.jpg" alt="Laptop" className="h-[160px] w-full rounded-md object-cover" />
					<div className="p-4 flex flex-col items-center justify-center">
						<h1 className="text-lg font-semibold  ">AI CHATBOT</h1>
						<p className="mt-2 text-sm text-white-600 p-1 text-gray-500">Enagage with our AI chatbot directly inside the meet and get your doubt clarified</p>
					</div>
				</div>

				<div className="w-[250px] h-[300px] rounded-lg border bg-white shadow-blue-400 shadow-[0_0_6px_3px] gap-5">
					<img src="https://www.ismartrecruit.com/upload/blog/main_image/Online_team_building_fun_interactive.webp" alt="Team work" className="h-[160px] w-full rounded-md object-cover" />
					<div className="p-4 flex flex-col items-center justify-center bg-white">
						<h1 className="text-lg font-semibold  ">Remote Interaction</h1>
						<p className="mt-2 text-sm text-white-600 p-1 text-gray-500">We  help to connect people virtually for office meetings or school classes</p>
					</div>
				</div>

				<div className="w-[250px] h-[300px] rounded-lg border bg-white shadow-blue-400 shadow-[0_0_6px_3px] gap-5">
					<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5cvddIaEk0o0jkC_87lqusobcw6UFvYPXa6jkvkm0g&s" alt="Laptop" className="h-[160px] w-full rounded-md object-cover" />
					<div className="p-4 flex flex-col items-center justify-center bg-white">
						<h1 className="text-lg font-semibold  ">Secured Authentication</h1>
						<p className="mt-2 text-sm text-white-600 p-1 text-gray-500">We provide the user a secured authentication to access things accordingly.</p>
					</div>
				</div>

				<div className="w-[250px] h-[300px] rounded-md border bg-white  shadow-blue-400 shadow-[0_0_6px_3px] gap-5">
					<img src="https://act-on.com/wp-content/uploads/2021/08/Privacy-Blog-V3.png" alt="Laptop" className="h-[160px] w-full rounded-md object-cover" />
					<div className="p-4 flex flex-col items-center justify-center bg-white">
						<h1 className="text-lg font-semibold  ">Privacy Protection</h1>
						<p className="mt-2 text-sm text-white-600 p-1 text-gray-500">Enjoy seemless collaboration without compromising on privacy.</p>
					</div>
				</div>

			</div>
		</>
	);
};

export default Feature;