import { SetStateAction, useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";
interface Message {
  content: string;
  recipient: string;
}

export interface StepsBenchmark {
  begin: string;
  check_expected_inputs: string;
  finalization: string;
  get_outputs: string;
  input_blocks_matching: string;
  input_query: string;
}

export interface RootObject {
  out: string;
  request_duration: string;
  steps_benchmark: StepsBenchmark;
  who: string;
  whotype: number;
}

type Prop = {
  sendData:(message:Message)=>Message;
}

export default function SendMessage({sendData} : Prop) {
  const [message, setMessage] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };

  const handleClick = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setMessage("")
   let userMessageObject = {} as Message;
   userMessageObject.content = message;
   userMessageObject.recipient = "leigh"
  sendData(userMessageObject)
    
    //need to create a message from bubble
    //clear the text field inout
    //make our request to the api
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: message,
      temperature: 0.9, // more value = model takes moe risk
      max_tokens: 2028,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    //get our response
    const response = completion.data.choices[0].text?.trim();
    let messageooBJ = {} as Message;
    messageooBJ.content = response;
    messageooBJ.recipient = "user"
    sendData(messageooBJ)
  };

 
  return (
    <section className="hero container max-w-screen-lg mx-auto pb-10 flex justify-center mg-0 p-0 absolute bottom-0 inset-x-0 ">
      <div className="w-full mt-16 md:mt-0  bg-gray-800">
        <div
          className="bg-gray-800 relative z-10 h-auto p-8 py-10 overflow-hidden "
          data-rounded="rounded-lg"
          data-rounded-max="rounded-full"
        >
          <div className="flex">
            <input
              type="text"
              name="email"
              id="email"
              className="block w-full px-4 py-3 mb-4 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none "
              data-rounded="rounded-lg"
              data-primary="blue-500"
              placeholder="Send Leigh a message"
              value={message}
              onChange={handleChange}
            />
            <button
              className="btn-primary px-4 py-3 mb-4 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              onClick={handleClick}
            >
              <IoMdSend color="white" size={30}></IoMdSend>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
