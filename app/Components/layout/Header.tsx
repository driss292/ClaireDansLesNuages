import Image from "next/image";
import Nav from "../navigation/Nav";

export default function Header() {
  return (
    <>
      <header className="max-w-7xl h-36 flex justify-center items-center flex-col mx-auto bg-white">
        <Image
          src="/assets/logo.png"
          className="h-28"
          width={250}
          height={250}
          alt="Logo"
        />
      </header>
      <Nav />
    </>
  );
}
