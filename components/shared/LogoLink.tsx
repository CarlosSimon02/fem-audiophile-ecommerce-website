import Link from "next/link";
import { LogoIcon } from "../ui/Icons";

const LogoLink = () => {
  return (
    <Link href="/">
      <LogoIcon className="w-44" />
    </Link>
  );
};

export default LogoLink;
