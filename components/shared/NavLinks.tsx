"use client";

import { cn } from "@/utils/functions";
import { usePathname } from "next/navigation";
import Link from "../ui/Link";

type NavLinksProps = {
  hasActiveStyle?: boolean;
};

const links = [
  { label: "HOME", path: "/" },
  { label: "HEADPHONES", path: "/headphones" },
  { label: "SPEAKERS", path: "/speakers" },
  { label: "EARPHONES", path: "/earphones" },
];

const NavLinks = ({ hasActiveStyle = true }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-8 max-lg:hidden">
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        return (
          <li key={index}>
            <Link
              className={cn(hasActiveStyle && isActive && "text-accent-900")}
              href={link.path}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
