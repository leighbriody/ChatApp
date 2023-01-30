import me from "./emoji.png";

interface MessageFromProps {
  content:string;
}

function MessageToBubble() {
  // Props that will need to be passed down
  // Image , Message Contents

  return (
    <section className="hero container max-w-screen-lg mx-auto pb-10 flex justify-center  mg-0 p-0">
    <div className="flex items-center flex-row-reverse mb-4">
      <div className="flex-none flex flex-col items-center space-y-1 ml-4">
        <img
          className="rounded-full w-10 h-10"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
      </div>
      <div className="flex-1 bg-indigo-400 text-white p-2 rounded-lg mb-2 relative">
        <div>Lorem ipsum dolor sit</div>
        Below is the code needed to have the bubble on the right
        {/* <div class="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-100"></div> */}
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 rotate-45 w-2 h-2 bg-indigo-400"></div>
      </div>
    </div>
  </section>
  );
}

export default MessageToBubble;



