import { HamburgerIcon, ShoppingCartIcon } from "../ui/Icons";
import { Container } from "./Container";
import LogoLink from "./LogoLink";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="bg-dark-800 text-light-100">
      <Container as="nav" className="flex justify-between py-8">
        <button
          className="shrink-0 lg:hidden sm:max-lg:mr-10"
          aria-label="Open Menu"
          aria-haspopup="true"
        >
          <HamburgerIcon className="w-4" />
        </button>
        <div className="sm:max-lg:mr-auto">
          <LogoLink />
        </div>
        <NavLinks />
        <button className="shrink-0" aria-label="Open Cart">
          <ShoppingCartIcon className="w-5" />
        </button>
      </Container>
    </header>
  );
};

export default Header;
