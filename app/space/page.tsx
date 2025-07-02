import { insidePageData } from "@/lib/data";
import Image from "next/image";

export default function InsidePage() {
  return (
    <section className="max-w-7xl mx-auto h-full bg-white px-10 pb-10 pt-1">
      {insidePageData.map((item) => (
        <div key={item.id} className="w-full h-auto">
          <h2>{item.title.toLocaleUpperCase()}</h2>
          <div>
            {item.images.map((image, index) => (
              <Image
                width={300}
                height={300}
                src={image}
                alt="image"
                key={`${item.id}-${index}`}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
