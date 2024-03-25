import Link from "next/link";
import ResponsiveImage from "../ui/ResponsiveImage";
import { CirclesPattern } from "../ui/SVGs";

const featuredOneImg = {
  mobile: "/assets/images/home/mobile/image-speaker-zx9.png",
  tablet: "/assets/images/home/tablet/image-speaker-zx9.png",
  desktop: "/assets/images/home/desktop/image-speaker-zx9.png",
};

const featuredTwoImg = {
  mobile: "/assets/images/home/mobile/image-speaker-zx7.jpg",
  tablet: "/assets/images/home/tablet/image-speaker-zx7.jpg",
  desktop: "/assets/images/home/desktop/image-speaker-zx7.jpg",
};

const featuredThreeImg = {
  mobile: "/assets/images/home/mobile/image-earphones-yx1.jpg",
  tablet: "/assets/images/home/tablet/image-earphones-yx1.jpg",
  desktop: "/assets/images/home/desktop/image-earphones-yx1.jpg",
};

const FeaturedItems = () => {
  return (
    <div className="my-28 lg:my-36 gap-6 sm:gap-8 lg:gap-12 flex flex-col">
      <div className="flex max-lg:flex-col max-lg:items-center max-lg:text-center justify-evenly bg-accent-900 max-lg:py-14 lg:pt-24 rounded-lg max-sm:gap-8 max-lg:gap-16 overflow-hidden relative">
        <div className="max-sm:max-w-[10.765625rem] max-lg:max-w-[12.5rem] w-full lg:w-[37%] relative top-7">
          <CirclesPattern className="w-[59rem] h-[59rem] absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]" />
          <ResponsiveImage
            deviceImages={featuredOneImg}
            alt="image of ZX9 Speaker"
            className="z-[1] relative"
            imgClassName="object-cover w-full h-auto"
          />
        </div>
        <div className="max-w-[21.875rem] flex flex-col items-center lg:items-start text-light-450 lg:mt-14 relative  ">
          <h2 className="header-text max-w-[8ch] text-4xl sm:text-6xl text-light-100 mb-6">
            ZX9 Speaker
          </h2>
          <p className="mb-6 lg:mb-10">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="/speakers/zx9-speaker" className="dark-button">
            See Product
          </Link>
        </div>
      </div>
      <div className="relative">
        <ResponsiveImage
          deviceImages={featuredTwoImg}
          alt="image of ZX7 Speaker"
          className="w-full"
          imgClassName="w-full rounded-lg"
        />
        <div className="absolute top-[50%] translate-y-[-50%] left-6 sm:left-16 lg:left-[5.9375rem]">
          <h2 className="header-text mb-8 text-dark-900 text-3xl">
            ZX7 Speaker
          </h2>
          <Link href="/speakers/zx7-speaker" className="outline-button">
            See Product
          </Link>
        </div>
      </div>
      <div className="flex max-sm:flex-col gap-6 sm:gap-[0.6875rem] lg:gap-8">
        <ResponsiveImage
          deviceImages={featuredThreeImg}
          alt="image of YX1 Earphone"
          className="flex-1 rounded-lg overflow-hidden sm:max-w-[50%]"
        />
        <div className="bg-light-400 flex-1 rounded-lg overflow-hidden flex justify-center items-start flex-col py-10 px-6 sm:px-10 lg:px-24 sm:max-w-[50%]">
          <h2 className="header-text mb-8 text-dark-900 text-3xl">
            YX1 Earphones
          </h2>
          <Link href="/earphones/yx1-earphones" className="outline-button">
            See Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
