import Image from "next/image";

export default function HomePage() {
  return (
    <section className="max-w-7xl mx-auto h-full bg-white px-10 pb-10 pt-1 relative">
      <div className="h-full grid lg:grid-rows-1 lg:grid-cols-3 grid-cols-1 grid-rows-3 gap-4">
        <div className="relative overflow-hidden">
          <Image
            src={"/assets/duchesse-2.png"}
            alt="duchesse-2"
            width={550}
            height={120}
            className={`absolute w-full h-full object-cover object-[15%]`}
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={"/assets/shoes-bg.png"}
            alt="shoes-bg"
            width={550}
            height={120}
            priority
            className={`absolute w-full h-full object-cover`}
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={"/assets/paradis-3.png"}
            alt="paradis-3"
            width={550}
            height={120}
            className={`absolute w-full h-full object-cover`}
          />
        </div>
      </div>
      <div className="w-[75%] max-w-[560px] h-auto bg-white text-center absolute left-1/2 -translate-x-1/2 top-[40%] lg:top-auto lg:bottom-32 text-base sm:text-lg md:text-lg flex flex-col items-center justify-between px-1 pb-1">
        <div className="pb-4">
          <p className="text-[9px] leading-1 sm:text-[11px] md:text-[13px] text-[var(--foreground)] font-copperplateLight tracking-wider">
            CLAIRE DANS LES NUAGES,
          </p>
          <p className="text-[8px] leading-none sm:text-[11px] md:text-[13px] font-copperplateLight tracking-wider">
            ALLIER LA RÊVERIE AU DESIGN.
          </p>
        </div>
        <div className="pt-4">
          <p className="text-[9px] sm:text-[11px] md:text-[13px] font-copperplateLight tracking-wider">
            DESIGNER, CONCEPTRICE 3D, GRAPHISTE, DEPUIS 2014.
          </p>
        </div>
      </div>
    </section>
  );
}
