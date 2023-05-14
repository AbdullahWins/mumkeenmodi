import React, { useEffect, useRef } from "react";
import { modiProfile, userProfile } from "../assets/images/getImages";

export default function Message({ user, message, time }) {
  const scrollRef = useRef();
  // on element increase it's autometically scroll down
  useEffect(() => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
    });
  });

  return (
    <div
      className={`flex items-start gap-x-4 w-full ${
        user && "flex-row-reverse ml-auto"
      }`}
      ref={scrollRef}
    >
      {/* img  */}
      <div className="shrink-0">
        <img
          src={user ? userProfile : modiProfile}
          alt="profile"
          className="h-9 w-9 sm:w-full "
        />
      </div>
      {/* message  */}
      <div
        className={`py-2 px-4 rounded-lg ${user ? "bg-primary" : "bg-green"}`}
      >
        <p className="text-sm sm:text-lg font-secondary font-normal">
          {message}
        </p>
        <p className={`text-xs ${user && "text-right"}`}>{time}</p>
      </div>
    </div>
  );
}
