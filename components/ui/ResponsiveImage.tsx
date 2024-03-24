import { screens } from "@/utils/constants";
import { DeviceImages } from "@/utils/types";

type ResponsiveImageProps = {
  deviceImages: DeviceImages;
  alt: string;
  className?: string;
  imgClassName?: string;
};

const ResponsiveImage = ({
  deviceImages,
  alt,
  className,
  imgClassName,
}: ResponsiveImageProps) => {
  const { mobile, tablet, desktop } = deviceImages;

  return (
    <picture className={className}>
      <source media={`(min-width: ${screens.lg})`} srcSet={desktop} />
      <source media={`(min-width: ${screens.sm})`} srcSet={tablet} />
      <img className={imgClassName} src={mobile} alt={alt} />
    </picture>
  );
};

export default ResponsiveImage;
