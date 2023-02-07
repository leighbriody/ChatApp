import user from "../Assets/user.png";


interface MessageFromProps {
  content:string;
}

function MessageToBubble({ content }: MessageFromProps) {
  // Props that will need to be passed down
  // Image , Message Contents

  return (
    <section className="hero container max-w-screen-lg mx-auto pb-10 flex justify-center  mg-0 p-0">
    <div className="flex items-center flex-row-reverse mb-4">
      <div className="flex-none flex flex-col items-center space-y-1 ml-4">
      <img className="rounded-full w-10 h-10" src={user} />
      </div>
      <div className="flex-1 bg-white text-black p-2 rounded-lg mb-2 relative">
        <div>{content}</div>
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-white"></div>
      </div>
    </div>
  </section>
  );
}

export default MessageToBubble;



