const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-black opacity-80"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-50 p-4 lg:p-8 pb-0 pr-0 rounded shadow-sm shadow-blue-600 bg-[var(--bg-color-1)] w-full max-w-[700px] h-auto lg:h-6/12 flex flex-col">
        <button
          className="absolute top-2 right-2 text-gray-500 cursor-pointer"
          onClick={onClose}
        >
          X
        </button>
        <form className="grid grid-cols-1 gap-8 flex-grow lg:grid-cols-2">
          {/* Inputs */}
          <div className="flex flex-col h-full">
            <h2 className="text-[28px] font-bold mb-4">Contact me</h2>
            <div className="border-b-2 border-[var(--main-blue)] max-w-[40%] pt-3 mb-4"></div>
            <input
              type="text"
              placeholder="Name"
              className="border-b-1 outline-0 max-w-full lg:max-w-[80%] px-2 py-1 mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b-1 outline-0 max-w-full lg:max-w-[80%] px-2 py-1 mb-4"
            />
          </div>

          {/* Text-Area */}
          <div className="flex flex-col h-full lg:border-l lg:pl-8">
            <textarea
              placeholder="Message"
              className="resize-none px-2 py-1 outline-0 h-32 lg:h-full w-full mb-4"
            ></textarea>
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
