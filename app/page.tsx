import { mainPageData } from "@/lib/data";
import MainItem from "./Components/ui/MainItem";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto h-[calc(100vh-188px)] bg-white px-10 pb-10 pt-1 relative">
      <div className="h-full grid grid-rows-1 grid-cols-3 gap-4">
        {mainPageData.map((item) => (
          <MainItem src={item.src} key={item.id} className={item.className} />
        ))}
      </div>
      <div className="w-[550px] h-[120px] bg-white text-center absolute bottom-32 left-1/2 -translate-x-1/2 text-xl flex flex-col items-center justify-between">
        <div>
          <p className="text-[13px] text-[var(--foreground)] font-copperplateLight  tracking-wider pt-1">
            CLAIRE DANS LES NUAGES,
          </p>
          <p className="text-[13px] font-copperplateLight tracking-wider">
            ALLIER LA RÊVERIE AU DESIGN.
          </p>
        </div>
        <div>
          <p className="text-[13px] mb-2 font-copperplateLight tracking-wider">
            DESIGNER, CONCEPTRICE 3D, GRAPHISTE, DEPUIS 2014.
          </p>
        </div>
      </div>
    </main>
  );
}
