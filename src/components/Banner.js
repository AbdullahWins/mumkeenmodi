import React from "react";
import { Link } from "react-router-dom";
import { banner } from "../assets/images/getImages";

export default function Banner() {
  return (
    <div className="flex justify-center">
      <div className="w-10/12">
        {/* texts */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-12 xl:gap-x-20 2xl:gap-x-32">
          <h1 className="text-3xl md:text-5xl xl:text-8xl text-black font-primary font-black flex-1 ease-in-out duration-150 mb-3 sm:mb-0">
            I am Narendra Modi Bot for you!
          </h1>
          <Link
            to="/conversation"
            className="py-3 px-5 lg:py-5 lg:px-6 bg-secondary text-xl md:text-2xl lg:text-3xl font-primary font-black text-white"
          >
            Ask me anything
          </Link>
        </div>
        {/* img  */}
        <div className="mt-8">
          <img src={banner} alt="banner" className="w-full" />
        </div>
      </div>
    </div>
  );
}
