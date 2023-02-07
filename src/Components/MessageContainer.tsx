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
  const messagesEndRef = useRef(null);

  const [allMessages, setMessages] = useState<Messages>({ messages: [] });

  const sendData = (data: Message) => {
    setMessages((prevState) => ({
      messages: [...prevState.messages, data],
    }));

    return data;
  };
  

  return (
    <span>
      <div className="px-4 py-2 overflow-y-scroll h-64">
        {allMessages.messages.map((message) =>
          message.recipient === "user" ? (
            <MessageFromBubble content={message.content} />
          ) : (
            <MessageToBubble content={message.content} />
          )
        )}
      
      </div>
    </span>
  );
}

export default MessagesContainer;
