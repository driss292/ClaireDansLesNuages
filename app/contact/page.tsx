import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-188px)] bg-white px-10 pt-1 flex items-center justify-center">
      <div className="max-w-[90%] sm:w-[475px]  flex flex-col items-center justify-center">
        <div className="pt-7 w-full flex-1 flex items-center justify-center">
          <div className="w-[260px] h-[260px] sm:w-[240px] sm:h-[240px]">
            <Image
              width={260}
              height={260}
              src="/assets/profil-2.jpg"
              alt="photo profil"
              className="w-full h-full object-cover border-[5px] border-[#686868] rounded-full"
            />
          </div>
        </div>
        <div className="w-full flex-1 p-4 sm:px-4 sm:pt-2">
          <h2 className="text-2xl sm:text-3xl text-center sm:mb-3">Contact</h2>
          <p className="text-center mb-5 sm:mb-4 text-sm sm:text-base">
            claire_chevalier@live.fr | Tél : 06 88 71 64 83
          </p>
          <form className="pb-6 sm:pb-10">
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
