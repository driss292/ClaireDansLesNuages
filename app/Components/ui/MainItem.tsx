import Image from "next/image";

export default function MainItem({
  src,
  className,
}: Readonly<{ src: string; className?: string }>) {
  return (
    <Image alt={src} width={550} height={120} src={src} className={className} />
  );
}
