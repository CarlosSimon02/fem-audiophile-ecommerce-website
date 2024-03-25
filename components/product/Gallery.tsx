import { DeviceImages } from "@/utils/types";
import ResponsiveImage from "../ui/ResponsiveImage";

type GalleryProps = {
  images: {
    first: DeviceImages;
    second: DeviceImages;
    third: DeviceImages;
  };
  productName: string;
};

const Gallery = ({ images, productName }: GalleryProps) => {
  return (
    <div className="grid gap-5 lg:gap-8 sm:grid-cols-[40%_1fr]">
      <ResponsiveImage
        deviceImages={images.first}
        alt={`first gallery image of ${productName}`}
        imgClassName="rounded-lg w-full h-full"
      />
      <ResponsiveImage
        deviceImages={images.second}
        alt={`second gallery image of ${productName}`}
        imgClassName="rounded-lg w-full h-full"
      />
      <ResponsiveImage
        deviceImages={images.third}
        alt={`third gallery image of ${productName}`}
        className="sm:row-start-1 sm:col-start-2 sm:row-span-2"
        imgClassName="rounded-lg w-full h-full object-cover"
      />
    </div>
  );
};

export default Gallery;
