import me from "../Assets/emoji.png";
function Emoji() {
  return (
    <div className="grid grid-cols-1 gap-4 content-start  items-center justify-cente bdark:bg-gray-800 h-full">
      <section className="hero container max-w-screen-lg mx-auto pb-10 flex justify-center  mg-0 p-0">
        <img src={me}/>
      </section>
    </div>
  );
}

export default Emoji;