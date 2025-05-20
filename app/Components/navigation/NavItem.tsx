import Link from "next/link";

type NavItemProps = {
  item: {
    name: string;
    href: string;
  };
  onClick?: () => void;
  className?: string;
};

export default function NavItem({
  item,
  className,
  onClick,
}: Readonly<NavItemProps>) {
  return (
    <Link
      key={item.name}
      href={item.href}
      className={className}
      onClick={onClick}
    >
      {item.name.toUpperCase()}
    </Link>
  );
}
