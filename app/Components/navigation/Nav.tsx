import { navigationData } from "@/lib/data";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <nav className="max-w-7xl mx-auto h-11 flex justify-evenly items-center bg-white">
      {navigationData.map((item) => (
        <NavItem key={item.name} item={item} />
      ))}
    </nav>
  );
}
