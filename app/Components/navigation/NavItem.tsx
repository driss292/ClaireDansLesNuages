import Link from "next/link";

type NavItemProps = {
  item: {
    name: string;
    href: string;
  };
};

export default function NavItem({ item }: Readonly<NavItemProps>) {
  return (
    <Link
      key={item.name}
      href={item.href}
      className="text-[var(--foreground)] text-xl hover:text-black"
    >
      {item.name.toUpperCase()}
    </Link>
  );
}
