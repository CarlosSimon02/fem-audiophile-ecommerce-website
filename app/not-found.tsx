import Container from "@/components/shared/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page Not Found",
};

const NotFound = () => {
  return (
    <Container className="py-10 sm:py-14 relative flex items-center justify-center">
      <p className="font-bold text-[20rem] opacity-20 text-center w-full">
        404
      </p>
      <p className="absolute text-accent-900 font-bold text-3xl">
        Sorry, we can’t find the page you’re looking for.
      </p>
    </Container>
  );
};

export default NotFound;
