export default function debugTailwind() {
  return (
    <div className="absolute top-4 left-48 p-4 bg-gray-200 rounded-lg shadow-lg">
      <span className="sm:hidden text-black font-bold text-lg">XS</span>
      <span className="hidden sm:block md:hidden text-black font-bold text-lg">
        SM
      </span>
      <span className="hidden md:block lg:hidden text-black font-bold text-lg">
        MD
      </span>
      <span className="hidden lg:block xl:hidden text-black font-bold text-lg">
        LG
      </span>
      <span className="hidden xl:block 2xl:hidden text-black font-bold text-lg">
        XL
      </span>
      <span className="hidden 2xl:block text-black font-bold text-lg">2XL</span>
    </div>
  );
}
