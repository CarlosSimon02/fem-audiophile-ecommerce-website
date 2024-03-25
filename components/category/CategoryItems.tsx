import { ProductItem } from "@/utils/types";
import Link from "next/link";
import ResponsiveImage from "../ui/ResponsiveImage";

type CategoryItemsProps = {
  items: ProductItem[];
};

const CategoryItems = ({ items }: CategoryItemsProps) => {
  return (
    <div className="flex flex-col gap-28 lg:gap-40 [&>*:nth-child(even)]:lg:flex-row-reverse">
      {items.map(
        ({
          id,
          category,
          slug,
          categoryImage,
          name,
          new: isNew,
          description,
        }) => {
          return (
            <div
              key={id}
              className="flex max-lg:flex-col lg:justify-between lg:items-center gap-12"
            >
              <ResponsiveImage
                className="lg:w-[50%] rounded-lg overflow-hidden"
                deviceImages={categoryImage}
                alt={`image of ${name}`}
              />
              <div className="lg:w-[40%] flex flex-col gap-6 sm:gap-8 items-center lg:items-start max-lg:text-center">
                <h2 className="header-text text-3xl sm:text-4xl tracking-[0.0625rem] sm:tracking-[0.089375rem] text-dark-900 max-w-[16ch]">
                  {isNew && (
                    <strong className="block font-normal text-[0.875rem] text-accent-900 tracking-[0.625rem] mb-2">
                      New Product
                    </strong>
                  )}
                  {name}
                </h2>
                <p className="max-w-[35.75rem]">{description}</p>
                <Link href={`/${category}/${slug}`} className="accent-button">
                  See Product
                </Link>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default CategoryItems;
