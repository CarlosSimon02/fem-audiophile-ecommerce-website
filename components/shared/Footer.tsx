import { Container } from "./Container";
import LogoLink from "./LogoLink";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <footer className="flex-1 bg-dark-800 text-light-100">
      <Container className="py-14 md:py-20">
        <div className="flex justify-between items-center">
          <LogoLink />
          <NavLinks hasActiveStyle={false} />
        </div>
        <div></div>
      </Container>
    </footer>
  );
};

export default Footer;
