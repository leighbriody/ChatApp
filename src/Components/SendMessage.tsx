import { IoMdSend } from "react-icons/io";

export default function SendMessage() {
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
              
            />
            <button className="btn-primary px-4 py-3 mb-4 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none">
              <IoMdSend color="white" size={30}></IoMdSend>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
