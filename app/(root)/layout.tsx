import { Container } from "@/components/shared/Container";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      <Container as="main">{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
