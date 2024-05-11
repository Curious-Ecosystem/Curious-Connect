import React from "react";

export default function Footer() {
  return (
    <div className="bottom-0 lg:m-5 lg:ml-5 md:m-2 md:ml-0 sm:ml-0 sm:m-2 w-[100%] fixed">
      <div className="flex gap-5 justify-between max-md:flex-wrap">
        <div className="flex flex-col px-5 text-xs font-bold uppercase text-zinc-500">
          <img
            loading="lazy"
        src="https://lh3.googleusercontent.com/pw/AP1GczPDVtoT03k6LkUX1li6iH9_OxO0eLPyLekO3ehsaRHCL9zU1QYCqvbm2CGNouFgGDSVUXSSEP4nWGkO3kv1EKbYbviOp0lVxx6f_ODeDnF-STYaApG6NPUXbP0bVyzpis38ATgP-gQ-rRZPaaxcwQGC=w36-h31-s-no-gm?authuser=0"
            className="w-9 aspect-[1.16] max-sm:mt-2.5"
          />
        </div>
        <div className="flex gap-2 items-start self-start lg:mr-5 md:mr-0 px-5 mt-4">
          <div className="shrink-0 self-stretch my-auto aspect-[1.41] w-[31px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className=" fill-blue-600"
            >
              <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
            </svg>
          </div>
          <div className="shrink-0 self-stretch my-auto aspect-[1.41] w-[31px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="fill-blue-600"
            >
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
            </svg>
          </div>
          <div className="shrink-0 self-stretch my-auto aspect-[1.41] w-[31px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="fill-blue-600"
            >
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
            </svg>
          </div>
          <div className="shrink-0 self-stretch my-auto aspect-[1.41] w-[31px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="fill-blue-600"
            >
              <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-4 text-[#7E7E7E] max-sm:text-center max-sm:mb-4">
        © 2024 CURIOUS CONNECT, all rights reserved
      </div>
    </div>
  );
}
