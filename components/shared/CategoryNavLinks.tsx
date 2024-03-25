import { categories } from "@/utils/constants";
import { cn } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "../ui/SVGs";

type CategoryNavLinksProps = {
  className?: string;
  onNavigate?: () => void;
};

const CategoryNavLinks = ({ className, onNavigate }: CategoryNavLinksProps) => {
  return (
    <ul
      className={cn(
        "mt-24 sm:mt-36 lg:mt-48 flex justify-stretch gap-x-3 lg:gap-x-8 gap-y-20 max-sm:flex-col",
        className
      )}
    >
      {categories.map(({ name, image, imageAlt }, index) => {
        return (
          <li key={index} className="flex-1 text-center">
            <Link href={`/${name}`} className="group" onClick={onNavigate}>
              <div className="relative pt-28 pb-5 bg-light-300 rounded-lg ">
                <Image
                  className="absolute w-52 h-auto -top-16 left-1/2 translate-x-[-50%]"
                  src={image}
                  width={300}
                  height={300}
                  alt={imageAlt}
                />
                <h2 className="header-text sm:text-lg text-dark-900 tracking-[0.086875rem] mb-4">
                  {name}
                </h2>
                <div className="inline-flex items-center gap-3 ">
                  <p className="in-link header-text tracking-[0.0625rem]">
                    Shop
                  </p>
                  <ArrowRightIcon className="w-2 h-4" />
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryNavLinks;
