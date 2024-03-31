import FeaturedItems from "@/components/home/FeaturedItems";
import HeroSection from "@/components/home/HeroSection";
import CategoryNavLinks from "@/components/shared/CategoryNavLinks";
import Container from "@/components/shared/Container";
import Description from "@/components/shared/Description";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <CategoryNavLinks />
        <FeaturedItems />
        <Description />
      </Container>
    </>
  );
};

export default Home;
