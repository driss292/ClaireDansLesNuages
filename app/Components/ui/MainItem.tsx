import Image from "next/image";

export default function MainItem({
  src,
  variant,
}: Readonly<{ src: string; variant?: string }>) {
  return (
    <div className="relative overflow-hidden">
      <Image
        alt={src}
        src={src}
        width={550}
        height={120}
        style={{ objectPosition: variant ?? "" }}
        className={`absolute w-full h-full object-cover`}
      />
    </div>
  );
}
