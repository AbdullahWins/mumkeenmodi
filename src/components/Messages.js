import React, { useContext } from "react";
import MessageLoader from "../assets/animations/MessageLoader";
import { AiContext } from "../contexts/AiContext";
import Message from "./Message";

export default function Messages() {
  const { modiMessages, isProccesing } = useContext(AiContext);
  return (
    <div
      className="w-full h-full bg-ash flex flex-col-reverse items-end py-6 overflow-hidden"
      style={{ justifyContent: "end" }}
    >
      <div className="flex w-full flex-col overflow-auto px-4 sm:px-8 md:px-12 gap-y-6">
        {modiMessages?.map((Modimessage, i) => (
          <Message
            user={Modimessage?.user}
            message={Modimessage?.message}
            time={Modimessage?.message_time}
            key={i}
          />
        ))}

        {isProccesing && <MessageLoader></MessageLoader>}
      </div>
    </div>
  );
}
