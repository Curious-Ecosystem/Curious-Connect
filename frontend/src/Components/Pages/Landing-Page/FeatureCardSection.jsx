import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence from Framer Motion

const featuresData = [
    {
        icon: 'https://st5.depositphotos.com/55541054/67076/i/450/depositphotos_670765480-stock-photo-explore-digital-frontier-chatbot-futuristic.jpg',
        title: 'AI Chatbot',
        description:
        'Engage with our AI chatbot directly inside the meet and get your doubt clarified',
    },
    {
        icon: 'https://www.ismartrecruit.com/upload/blog/main_image/Online_team_building_fun_interactive.webp',
        title: 'Remote Interaction',
        description: 'We Help People to Connect Virtually for office meeting or School Classes.',
    },
    {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5cvddIaEk0o0jkC_87lqusobcw6UFvYPXa6jkvkm0g&s',
        title: 'Secured Authentication',
        description: 'We provide the user a secured authentication to access things accordingly.',
    },
    {
        icon: 'https://act-on.com/wp-content/uploads/2021/08/Privacy-Blog-V3.png',
        title: 'Privacy Protection',
        description:
        'Enjoy seamless collaboration without compromising on privacy or security concerns',
    },
];

const Feature = () => {
    return (
        <>
            <div className="my-12 flex justify-evenly items-center gap-10 lg:flex flex-wrap">
                <AnimatePresence>
                    {featuresData.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: -1, y: 100 }} // Initial state
                            animate={{ opacity: 1, y: 0 }} // Animate state
                            exit={{ opacity: 0, y: -10 }} // Exit state
                            transition={{ duration: 0.5, delay: index * 0.13 }} // Transition duration with stagger effect
                            whileHover={{ scale: 1.1 }} // Apply scale animation on hover
                            className="w-[250px] h-[300px] rounded-lg border bg-white shadow-blue-400 shadow-[0_0_6px_3px] gap-5 overflow-hidden"
                        >
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="h-[160px] w-full rounded-md object-cover"
                            />
                            <div className="p-4 flex flex-col items-center justify-center">
                                <h1 className="text-lg font-semibold">{feature.title}</h1>
                                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Feature;
