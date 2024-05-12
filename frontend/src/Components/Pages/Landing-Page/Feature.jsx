import React from "react";

const Feature = () => {
  return (
      <div className="w-full h-full text-cyan-50 text-2xl text-center p-10 md:p-25 mt-10">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Curious Connect Unique Attributes
        </h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">With SFU integrated server. We engineered a plateform with maximum video quality lowest latency that makes your calls crystal clear. Compatible with all browsers and plateforms!</p>
        <div class="m-4 grid gap-6 sm:grid-cols-2 md:grid-cols-4 ">
          <div class="p-5 min-h-[100px] rounded-lg bg-white shadow">
            <img class="w-20 h-20 p-3" src="../../../media/ai.png" alt="AI" />
            <h5 class="mb-2 text-l text-left font-semibold tracking-tight text-gray-900 dark:text-black">AI Chatbot</h5>
            <p class="mb-3 font-normal text-m text-gray text-left dark:text-gray-400">Engage with our AI chatbot directly inside the meet and get your doubt clarified</p>
          </div>
          <div class="p-5 min-h-[100px] rounded-lg bg-white shadow">
            <img class="w-20 h-20 p-3" src="../../../media/letter.png" alt="White board" />
            <h5 class="mb-2 text-l text-left font-semibold tracking-tight text-gray-900 dark:text-black">Interactive White Board</h5>
            <p class="mb-3 font-normal text-m text-gray text-left dark:text-gray-400">Have realistic interaction with intractive white board</p>
          </div>
          <div class="p-5 min-h-[100px] rounded-lg bg-white shadow">
            <img class="w-20 h-20 p-3" src="../../../media/encrypted.png" alt="encryption" />
            <h5 class="mb-2 text-l text-left font-semibold tracking-tight text-gray-900 dark:text-black">End to End Encryption</h5>
            <p class="mb-3 font-normal text-m text-gray text-left dark:text-gray-400">Enjoy seamless collaboration with end to end encryption</p>
          </div>
          <div class="p-5 min-h-[100px] rounded-lg bg-white shadow">
            <img class="w-20 h-20 p-3" src="../../../media/privacy.png" alt="privacy protection" />
            <h5 class="mb-2 text-l text-left font-semibold tracking-tight text-gray-900 dark:text-black">Privacy Protection</h5>
            <p class="mb-3 font-normal text-m text-gray text-left dark:text-gray-400">Enjoy seamless collaboration without compromising on privacy or security concerns</p>
          </div>
        </div>
      </div>
  );
};

export default Feature;
