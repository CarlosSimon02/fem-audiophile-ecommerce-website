import { DeviceImages } from "@/utils/types";
import ResponsiveImage from "../ui/ResponsiveImage";
import AddToCartControl from "./AddToCartControl";

type DetailsProps = {
  id: number;
  image: DeviceImages;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  price: number;
  isNew: boolean;
};

const Details = ({
  id,
  image,
  slug,
  name,
  shortName,
  description,
  price,
  isNew,
}: DetailsProps) => {
  return (
    <div className="flex max-sm:flex-col sm:justify-between sm:items-center gap-12">
      <ResponsiveImage
        className="sm:w-[40.75%] lg:w-[50%] rounded-lg overflow-hidden"
        deviceImages={image}
        alt={`image of ${name}`}
      />
      <div className="sm:w-[50%] lg:w-[40%] flex flex-col gap-6 sm:gap-8 items-start">
        <h2 className="detail-header text-3xl max-w-[16ch]">
          {isNew && (
            <strong className="block font-normal text-[0.875rem] text-accent-900 tracking-[0.625rem] mb-2">
              New Product
            </strong>
          )}
          {name}
        </h2>
        <p className="max-w-[35.75rem]">{description}</p>
        <p className="font-bold text-dark-900 tracking-[0.080625rem] text-lg">{`$ ${price.toLocaleString()}`}</p>
        <AddToCartControl itemToAdd={{ id, slug, price, shortName }} />
      </div>
    </div>
  );
};

export default Details;
