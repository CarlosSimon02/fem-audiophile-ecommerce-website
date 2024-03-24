import Link from "next/link";
import { LogoIcon } from "../ui/SVGs";

const LogoLink = () => {
  return (
    <Link href="/">
      <LogoIcon className="w-44" />
    </Link>
  );
};

export default LogoLink;
