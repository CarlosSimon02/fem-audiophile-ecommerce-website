"use client";

import { categories } from "@/utils/constants";
import { cn } from "@/utils/functions";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  className?: string;
  hasActiveStyle?: boolean;
};

const links = ["", ...categories.map(({ name }) => name)];

const NavLinks = ({ className, hasActiveStyle = true }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <ul className={cn("flex gap-x-8", className)}>
      {links.map((link, index) => {
        const isActive = pathname === `/${link}`;
        return (
          <li key={index}>
            <Link
              className={cn(
                hasActiveStyle && isActive && "text-accent-900",
                "link"
              )}
              href={`/${link}`}
            >
              {link ? link : "home"}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
