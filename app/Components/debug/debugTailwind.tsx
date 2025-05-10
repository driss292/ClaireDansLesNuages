export default function DebugTailwind() {
  return (
    <div className="absolute bottom-4 left-48">
      <span className="sm:hidden text-black">XS</span>
      <span className="hidden sm:block md:hidden text-black">SM</span>
      <span className="hidden md:block lg:hidden text-black">MD</span>
      <span className="hidden lg:block xl:hidden text-black">LG</span>
    </div>
  );
}
