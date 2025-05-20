import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="max-w-7xl mx-auto max-h-screen h-full bg-white px-10 pb-10 pt-1 flex flex-col items-center justify-center">
      <div className="max-w-[90%] sm:w-[475px] h-full flex flex-col justify-around">
        <div className="w-full flex-1/3 flex items-start justify-center ">
          <div className="w-[230px] h-[230px] md:w-[270px] md:h-[270px] sm:w-[240px] sm:h-[240px]">
            <Image
              width={280}
              height={280}
              src="/assets/profil-2.jpg"
              alt="photo profil"
              className="w-full h-full object-cover border-[5px] border-[#686868] rounded-full"
            />
          </div>
        </div>
        <div className="w-full flex-2/3 p-0 sm:px-4">
          <h2 className="text-lg mt-1 mb-10 sm:text-3xl text-center sm:mb-3 font-copperplateRegular">
            Où me Contacter ?
          </h2>
          <p className="text-center mb-1 font-copperplateLight text-xs sm:text-xs md:text-sm lg:text-lg">
            clairedanslesnuages@hotmail.com
          </p>
          <p className="text-center pb-2 sm:mb-4 text-sm font-copperplateLight sm:text-base">
            06.88.71.64.83
          </p>

          <form className="pb-0">
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
            {/* <p className="text-center pt-5">Lien vers CV</p> */}
          </form>
        </div>
      </div>
    </section>
  );
}
