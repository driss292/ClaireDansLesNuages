import Image from "next/image";
import Nav from "../navigation/Nav";

export default function Header() {
  return (
    <>
      <header className="max-w-7xl w-full h-20 sm:h-36 flex flex-col justify-center items-center mx-auto bg-white px-4">
        <Image
          src="/assets/logo.png"
          className="h-auto w-[150px] sm:w-[200px] md:w-[250px]"
          width={250}
          height={250}
          alt="Logo"
        />
      </header>
      <Nav />
    </>
  );
}
