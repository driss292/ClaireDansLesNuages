export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-188px)] bg-white px-4 sm:px-10 flex items-center justify-center">
      <div className="max-w-[90%] sm:w-[475px] h-full  flex flex-col items-center justify-center">
        <div className=" mt-7 w-full flex-1 flex items-center justify-center">
          <div className="w-[260px] h-[260px] sm:w-[260px] sm:h-[260px] bg-red-500 rounded-full"></div>
        </div>
        <div className="bg-white w-full flex-1 p-4 sm:p-6">
          <h2 className="text-2xl sm:text-3xl text-center mb-3 sm:mb-5">
            Contact
          </h2>
          <p className="text-center mb-5 sm:mb-7 text-sm sm:text-base">
            claire_chevalier@live.fr | Tel : 06 88 71 64 83
          </p>
          <form className="mb-6 sm:mb-10">
            <input
              type="text"
              placeholder="Nom *"
              className="w-full h-[30px] bg-[var(--formBG)] rounded-sm mt-2 px-2 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Email *"
              className="w-full h-[30px] bg-[var(--formBG)] rounded-sm mt-2 px-2 text-sm sm:text-base"
            />
            <input
              type="text"
              placeholder="Sujet"
              className="w-full h-[30px] bg-[var(--formBG)] rounded-sm mt-2 px-2 text-sm sm:text-base"
            />
            <textarea
              placeholder="Message"
              className="w-full h-32 bg-[var(--formBG)] rounded-sm mt-2 px-2 pt-2 text-sm sm:text-base resize-none"
            ></textarea>
            <div className="flex justify-end mt-1">
              <button className="w-20 h-7 flex justify-center items-center bg-[var(--formText)] p-1 text-xs text-white">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
