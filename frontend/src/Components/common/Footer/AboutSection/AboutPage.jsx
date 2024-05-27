import React from 'react';
import teamData from '../../../../Data/teamData';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaVideo,
  FaChartBar,
  FaComments,
  FaShieldAlt,
  FaCog,
} from 'react-icons/fa';

function AboutPage() {
  React.useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initclassName: 'aos-init', // className applied after initialization
      animatedclassName: 'aos-animate', // className applied on animation
      useclassNames: false, // if true, will add content of `data-aos` as classNamees on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
    AOS.refresh();
  });
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="60"
        data-aos-duration="1500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="bg-gradient min-h-screen"
      >
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-8">
            About Curious Connect
          </div>
          <div className="text-xl text-gray-100 mb-6">
            Curious Connect is your go-to platform for revolutionizing virtual
            collaboration. Designed by Curious Ecosystem, it's a
            microservice-based video conferencing application aimed at enhancing
            remote team interactions, webinars, and online classes.
          </div>
          <div className="text-xl text-gray-100 mb-6">
            With a focus on seamless user experiences, secure authentication,
            real-time communication, and optimized media processing, Curious
            Connect empowers teams to connect effortlessly and achieve their
            goals.
          </div>
          <div className="text-xl text-gray-100 mb-6">
            Explore Curious Connect to redefine how you collaborate online and
            unlock new levels of productivity and engagement.
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 mb-14">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Key Features
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center text-lg text-gray-700 hover:text-teal-400 transition-colors duration-300">
                <FaVideo className="h-6 w-6 text-teal-400 mr-3" />
                High-quality video conferencing
              </li>
              <li className="flex items-center text-lg text-gray-700 hover:text-teal-400 transition-colors duration-300">
                <FaChartBar className="h-6 w-6 text-teal-400 mr-3" />
                Screen sharing capabilities
              </li>
              <li className="flex items-center text-lg text-gray-700 hover:text-teal-400 transition-colors duration-300">
                <FaComments className="h-6 w-6 text-teal-400 mr-3" />
                Real-time chat and messaging
              </li>
              <li className="flex items-center text-lg text-gray-700 hover:text-teal-400 transition-colors duration-300">
                <FaShieldAlt className="h-6 w-6 text-teal-400 mr-3" />
                Secure end-to-end encryption
              </li>
              <li className="flex items-center text-lg text-gray-700 hover:text-teal-400 transition-colors duration-300">
                <FaCog className="h-6 w-6 text-teal-400 mr-3" />
                Customizable meeting settings
              </li>
            </ul>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="60"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="text-center pb-12"
          >
            {/* <h2 className="text-base font-bold text-indigo-600">
                We have the best equipment in the market

            </h2> */}

            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-8">
              Check our awesome team members
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {teamData.map((member, index) => (
              <div
                key={index}
                className=" rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-col items-center justify-center mb-10"
              >
                <div
                  data-aos="flip-up"
                  data-aos-offset="300"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  className=" mb-2 w-4/5 h-61 md:w-2/5 h-60 lg:h-55 "
                >
                  <img
                    className="object-center bg-transparent  rounded-[90%] object-cover w-full h-full "
                    src={member.image}
                    alt={`${member.name}'s profile`}
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="60"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                  className=" w-full rounded-xl bg-gray-900 md:w-3/5 text-left p-6 md:p-4 space-y-2"
                >
                  <p className="text-xl text-white font-bold">{member.name}</p>
                  <p className="text-base text-gray-400 font-normal">
                    {member.role}
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 font-normal">
                    {member.about}
                  </p>
                  <div className="flex justify-start space-x-2">
                    <a
                      href={member.twitter}
                      className="text-gray-500 hover:text-gray-600"
                    >
                      <svg
                        className="w-8 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"
                          clipRule="evenodd "
                        ></path>
                      </svg>
                    </a>

                    <a
                      href={member.linkedin}
                      className="text-gray-500 hover:text-gray-600"
                    >
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href={member.github}
                      className="text-gray-500 hover:text-gray-600"
                    >
                      <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 46 46"
                      >
                        <path
                          fillRule="evenodd"
                          d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
