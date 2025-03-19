import Image from "next/image";

export default function Header() {
  return (
    <header className="max-w-7xl w-full h-auto py-4 sm:py-6 flex flex-col justify-center items-center mx-auto bg-white px-4 border-b border-gray-300">
      <Image
        src="/assets/logo.png"
        className="h-auto w-[120px] sm:w-[180px] md:w-[220px] lg:w-[250px] max-w-xs"
        width={250}
        height={250}
        alt="Logo"
      />
    </header>
  );
}
