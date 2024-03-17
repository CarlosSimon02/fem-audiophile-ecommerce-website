import { cn } from "@/utils/functions";
import NextLink from "next/link";
import type { UrlObject } from "url";
type Url = string | UrlObject;

type InternalLinkProps = {
  href: Url;
  as?: Url;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
  legacyBehavior?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type LinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof InternalLinkProps
> &
  InternalLinkProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;

const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(
        "font-semibold text-sm tracking-widest hover:text-accent-900 transition-colors ease-in-out duration-500",
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
