import React, { useRef, useState } from "react";
import MessageFromBubble from "./MessageFrom";
import MessageToBubble from "./MessageTo";
import SendMessage from "./SendMessage";

interface Message {
  content: string;
  recipient: string;
}

interface Messages {
  messages: Message[];
}

function MessagesContainer() {
  const [allMessages, setMessages] = useState<Messages>({ messages: [] });

  const sendData = (data: Message) => {
    setMessages((prevState) => ({
      messages: [...prevState.messages, data],
    }));

    //change this to not return and be void

    return data;
  };
  //Create an array of messages
  const messages: Messages = {
    messages: [],
  };

  return (
    <span>
      <div className="overflow-y-scroll scrollbar h-60">
        <div className="flex flex-col justify-end h-60">
          {allMessages.messages.map((message) =>
            message.recipient === "user" ? (
              <MessageFromBubble content={message.content} />
            ) : (
              <MessageToBubble content={message.content} />
            )
          )}
        </div>
      </div>
      <SendMessage sendData={sendData}></SendMessage>
    </span>
  );
}

export default MessagesContainer;
