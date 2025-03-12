export default function MainItem({ src }: Readonly<{ src: string }>) {
  return <img src={src} className="w-full h-full object-cover" />;
}
