import { DeviceImages } from "@/utils/types";
import Link from "next/link";
import ResponsiveImage from "../ui/ResponsiveImage";

type OtherProductsProps = {
  others: {
    slug: string;
    name: string;
    image: DeviceImages;
  }[];
};

const getLastWordAfterLastDash = (slug: string): string => {
  let lastDashIndex: number = slug.lastIndexOf("-");
  if (lastDashIndex !== -1) {
    let lastWord: string = slug.substring(lastDashIndex + 1);
    if (!lastWord.endsWith("s")) {
      return lastWord + "s";
    } else {
      return lastWord;
    }
  } else {
    return "";
  }
};

const OtherProducts = ({ others }: OtherProductsProps) => {
  return (
    <div>
      <h2 className="detail-header text-center mb-10 sm:mb-14 lg:mb-16">
        You May Also Like
      </h2>
      <ul className="grid sm:grid-cols-3 gap-y-14 gap-x-3 lg:gap-x-8">
        {others.map(({ image, name, slug }, index) => {
          return (
            <li key={index} className="flex flex-col items-center text-center">
              <ResponsiveImage
                deviceImages={image}
                alt={`image of ${name}`}
                imgClassName="rounded-lg"
                className="mb-8 sm:mb-10"
              />
              <h3 className="detail-header mb-8 flex-1">{name}</h3>
              <Link
                href={`/${getLastWordAfterLastDash(slug)}/${slug}`}
                className="accent-button"
              >
                See Product
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OtherProducts;
