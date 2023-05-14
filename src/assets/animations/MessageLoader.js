import React, { useEffect, useRef } from 'react'
import { modiProfile } from '../images/getImages'

export default function MessageLoader() {

    const scrollRef = useRef();
    // on element increase it's autometically scroll down
    useEffect(() => {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
    });


  return (
    <div className={`flex items-start gap-x-4 w-full`} ref={scrollRef}>
            {/* img  */}
                <div className="shrink-0"> 
                    <img src={modiProfile} alt="profile" className="h-9 w-9 sm:w-full " />
                </div>
            {/* message  */}
            <div className="py-1 px-2 sm:p-4 rounded-lg bg-green flex items-center gap-1">
                <div className='w-2 h-2 rounded-full bg-fade animate-bounce' style={{animationDelay : "0.1s"}}></div>
                <div className='w-2 h-2 rounded-full bg-fade animate-bounce' style={{animationDelay : "0.2s"}}></div>
                <div className='w-2 h-2 rounded-full bg-fade animate-bounce' style={{animationDelay : "0.3s"}} ></div>
            </div>
        </div>
  )
}
