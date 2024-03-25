import { cn } from "@/utils/functions";
import Link from "next/link";
import { Container } from "../shared/Container";
import ResponsiveImage from "../ui/ResponsiveImage";

const heroImg = {
  mobile: "/assets/images/home/mobile/image-header.jpg",
  tablet: "/assets/images/home/tablet/image-header.jpg",
  desktop: "/assets/images/home/desktop/image-hero.jpg",
};

const HeroSection = () => {
  return (
    <div className="bg-dark-700 text-light-450 overflow-hidden">
      <Container
        className={cn(
          "py-28 sm:pt-32 sm:pb-40 max-lg:text-center relative",
          "line-separator"
        )}
      >
        <ResponsiveImage
          deviceImages={heroImg}
          className="absolute h-[116%] top-[-5.70729375rem] w-full left-1/2 translate-x-[-50%] max-lg:opacity-50"
          imgClassName="object-cover mx-auto h-full"
          alt="image of XX99 Mark II headphone"
        />
        <div className="relative">
          <h1 className="w-full header-text text-4xl sm:text-6xl max-w-[15ch] text-light-100 mb-6 max-lg:mx-auto">
            <strong className="block tracking-[0.625rem] uppercase font-normal text-light-500 text-sm mb-4 sm:mb-6">
              New Product
            </strong>
            XX99 Mark II Headphones
          </h1>
          <p className="w-full max-w-[38ch] mb-7 sm:mb-10 max-lg:mx-auto">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href="/headphones/xx99-mark-two-headphones"
            className="accent-button"
          >
            See Product
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
