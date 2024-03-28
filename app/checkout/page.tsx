import Content from "@/components/checkout/Content";
import Container from "@/components/shared/Container";
import GoBack from "@/components/shared/GoBack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
};

const Checkout = () => {
  return (
    <Container>
      <GoBack className="mt-4 sm:mt-8 lg:mt-20" />
      <Content />
    </Container>
  );
};

export default Checkout;
