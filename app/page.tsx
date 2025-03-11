import { mainPageData } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto h-[calc(100vh-188px)] bg-white px-10 pb-10 pt-1 relative">
      <div className="h-full grid grid-rows-1 grid-cols-3 gap-4">
        {mainPageData.map((item) => (
          <div key={item.src} className="bg-slate-300"></div>
        ))}
      </div>
      <div className="max-w-[600px] h-[120px] bg-white text-center absolute bottom-32 left-1/2 -translate-x-1/2 text-xl">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis,
        fugit?
      </div>
    </main>
  );
}
