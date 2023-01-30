import me from "../Assets/emoji.png";

interface MessageFromProps {
  content:string;
}
function MessageFromBubble({ content }: MessageFromProps) {
  
  return (
    <section className="hero container max-w-screen-lg mx-auto pb-10 flex justify-center  mg-0 p-0">
      {/* messages here */}
      <div className="flex items-center mb-4">
        <div className="flex-none flex flex-col items-center space-y-1 mr-4">
          <img className="rounded-full w-10 h-10" src={me} />
        </div>
        <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
          <div>{content}</div>
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
        </div>
      </div>
    </section>
  );
}

export default MessageFromBubble;
