import CartControl from "./CartControl";
import Container from "./Container";
import LogoLink from "./LogoLink";
import MobileNavControl from "./MobileNavControl";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="bg-dark-700 text-light-100 z-10 main-header">
      <Container>
        <nav className="flex justify-between items-center py-8 relative">
          <MobileNavControl />
          <div className="sm:max-lg:mr-auto">
            <LogoLink />
          </div>
          <NavLinks className="max-lg:hidden" />
          <CartControl />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
