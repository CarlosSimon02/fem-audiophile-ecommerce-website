import Link from "next/link";
import { LogoIcon } from "../ui/SVGs";

const LogoLink = () => {
  return (
    <Link href="/" aria-label="Audiophile - Home">
      <LogoIcon className="w-44" />
    </Link>
  );
};

export default LogoLink;
