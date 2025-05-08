import React from "react";
// import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
// import img1 from "../../assets/images/about/shortner_img.jpeg";
// import img2 from "../../assets/images/about/analytics_img.jpeg";
// import img3 from "../../assets/images/about/security_img.jpeg";
// import img4 from "../../assets/images/about/speed_img.jpeg";

import {aboutData} from './aboutData'



const About = () => {
  return (
    <div className="px-5 pt-2 min-h-[calc(100vh-64px)] sm:px-8 lg:px-14">
      <div className="py-8 sm:py-10 w-full">
        <h1 className="text-slate-800 text-5xl sm:text-4xl font-bold mb-3 text-center">
          Why EZ Short
        </h1>
        <p className="text-gray-700 mb-10 text-center text-[14px]">
          EZ Short makes URL shortening effortless and efficient. With just a
          few clicks, you can generate clean, shareable links that are easy to
          manage and track. Whether you're streamlining communication, promoting
          content, or monitoring engagement, EZ Short provides a seamless way to
          handle your links—all in one simple, intuitive platform.
        </p>
        <div className="space-y-6 w-full">
          {
            aboutData.map((item) => (
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-3 text-center lg:text-left">
                  {item.title}
                </h2>
  
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <img
                  className="w-52 h-52 rounded-lg object-contain md:w-36 md:h-36"
                  src={item.img}
                  alt="Simple URL Shortening"
                />
                <p className="text-gray-600 text-sm sm:text-lg">
                  {item.disc}
                </p>
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default About;
