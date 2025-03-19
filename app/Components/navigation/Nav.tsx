import { navigationData } from "@/lib/data";
import NavItem from "./NavItem";
import DebugTailwind from "../Debug/debugTailwind";

export default function Nav() {
  return (
    <nav className="max-w-7xl w-full mx-auto min-h-11 h-11 flex justify-evenly items-center bg-white px-10">
      <DebugTailwind />
      {navigationData.map((item) => (
        <NavItem key={item.name} item={item} />
      ))}
    </nav>
  );
}
