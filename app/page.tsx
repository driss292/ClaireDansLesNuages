import Image from "next/image";
import Logo from "../public/logo-Claire-chevalier.svg";

export default function Home() {
  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{ backgroundImage: "url('/assets/background-2.jpg')" }}
    >
      {/* Logo et Contenu Principal */}
      <main className="max-w-4xl mx-auto  px-4">
        {/* <div className="text-center mb-16">
          <div className="relative inline-block">
          </div>
        </div> */}

        {/* Message "En travaux" */}
        <div className="bg-white mt-auto p-48 shadow-md text-center mb-16">
          <Image
            width={150}
            height={150}
            src={Logo}
            alt="Logo"
            className="mb-8"
            style={{ width: "455px" }}
          />
          <h2 className="text-3xl text-gray-700 mb-8 mt-14 tracking-wide font-light">
            SITE EN COURS DE CRÉATION
          </h2>
          <p className="text-gray-500 mb-6 tracking-wide">
            ALLIER LA RÊVERIE AU DESIGN
          </p>
        </div>
      </main>
    </div>
  );
}
