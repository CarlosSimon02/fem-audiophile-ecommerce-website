import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../ui/SVGs";
import Container from "./Container";
import LogoLink from "./LogoLink";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <footer className=" bg-dark-800 text-light-500 relative mt-28 sm:mt-36">
      <Container className="py-14 md:py-20 before:w-28 before:h-1 before:bg-accent-900 before:absolute before:top-0 before:mx-auto before:max-sm:translate-x-[-50%] before:max-sm:left-1/2">
        <div className="flex max-md:flex-col gap-8 max-sm:gap-12 justify-between md:items-center max-sm:items-center">
          <LogoLink />
          <NavLinks
            hasActiveStyle={false}
            className="max-sm:flex-col gap-y-4 max-sm:items-center"
          />
        </div>
        <div className="mt-12 sm:mt-9 grid sm:grid-cols-2 sm:grid-rows-2 max-sm:text-center gap-y-12 items-center">
          <p className="sm:col-span-2 lg:col-span-1">
            Audiophile is an all in one stop to fulfill your audio needs. We are
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className="row-start-2 font-bold">
            Copyright 2024. All Rights Reserved
          </p>
          <div className="flex items-center justify-center gap-4 sm:justify-end lg:col-start-2 lg:self-end">
            <a
              className="w-6 group"
              aria-label="Follow us on Facebook"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="in-link" />
            </a>
            <a
              className="w-6 group"
              aria-label="Follow us on Twitter"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="in-link" />
            </a>
            <a
              className="w-6 group"
              aria-label="Follow us on Instagram"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="in-link" />
            </a>
          </div>
          <p className="max-lg:sm:col-span-2 text-center lg:text-right">
            Challenge by{" "}
            <Link
              className="link normal-case tracking-normal"
              href="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx/hub"
            >
              Frontend Mentor
            </Link>
            . Coded by{" "}
            <Link
              className="link normal-case tracking-normal"
              href="https://github.com/CarlosSimon02"
            >
              CarlosSimon02
            </Link>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
