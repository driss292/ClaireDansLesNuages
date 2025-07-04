import { insidePageData } from "@/lib/data";
import Image from "next/image";

export default function InsidePage() {
  return (
    <section className="max-w-7xl mx-auto h-full bg-white px-10 pb-10 pt-1">
      {insidePageData.map((item) => (
        <div key={item.id} className="w-full h-auto">
          <h2>{item.title.toLocaleUpperCase()}</h2>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {item.images.map((image, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`relative ${index === 2 ? "col-span-2" : ""}`}
              >
                <Image
                  width={600}
                  height={400}
                  src={image}
                  alt="image"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
