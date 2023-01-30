import React from "react";
import MessageFromBubble from "./MessageFrom";
import MessageToBubble from "./MessageTo";
interface Message {
  content: string;
  recipient: string;
}

interface Messages {
  messages: Message[];
}

function MessagesContainer() {
  //Create an array of messages
  const messages: Messages = {
    messages: [
      { content: "Hell?", recipient: "user" },
      { content: "Hi", recipient: "Leigh" },
      { content: "Hey", recipient: "user" },
      { content: "Hello my name is leigh , w ?", recipient: "user" },
    ],
  };

  return (
    <div className="overflow-y-scroll h-60 scrollbar ">
      {messages.messages.map((message) =>
        message.recipient === "user" ? (
          
          <MessageFromBubble content={message.content} />
        ) : (
          <MessageToBubble />
        )
      )}
    </div>
  );
}

export default MessagesContainer;
