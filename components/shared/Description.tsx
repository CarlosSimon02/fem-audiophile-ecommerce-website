import { cn } from "@/utils/functions";
import ResponsiveImage from "../ui/ResponsiveImage";

type DescriptionProps = {
  className?: string;
};

const bestGearImg = {
  mobile: "/assets/images/shared/mobile/image-best-gear.jpg",
  tablet: "/assets/images/shared/tablet/image-best-gear.jpg",
  desktop: "/assets/images/shared/desktop/image-best-gear.jpg",
};

const Description = ({ className }: DescriptionProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-10 sm:gap-16 lg:gap-32 lg:flex-row-reverse lg:items-center",
        className
      )}
    >
      <ResponsiveImage
        alt="man listening to music with headphones"
        deviceImages={bestGearImg}
        className="rounded-lg overflow-hidden flex-1"
        imgClassName="object-cover w-full h-auto"
      />
      <div className="max-lg:text-center flex-1">
        <h2 className="header-text text-3xl sm:text-4xl text-dark-900 mb-8">
          Bringing you the <span className="text-accent-900">best</span> audio
          gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default Description;
