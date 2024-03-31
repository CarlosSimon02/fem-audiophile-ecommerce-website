import CategoryItems from "@/components/category/CategoryItems";
import CategoryNavLinks from "@/components/shared/CategoryNavLinks";
import Container from "@/components/shared/Container";
import Description from "@/components/shared/Description";
import dataProducts from "@/data/data.json";
import { categories } from "@/utils/constants";
import { ProductItem } from "@/utils/types";
import { Metadata } from "next";

type CategoryProps = { params: { category: string } };

export const generateMetadata = ({ params }: CategoryProps): Metadata => {
  return {
    title: params.category.charAt(0).toUpperCase() + params.category.slice(1),
  };
};

const Category = async ({ params }: CategoryProps) => {
  const categoryItems = dataProducts.filter(
    (item) => item.category === params.category
  ) as ProductItem[];

  return (
    <>
      <div className="bg-dark-700">
        <Container className="line-separator py-8 sm:py-24 relative">
          <h1 className="header-text text-3xl sm:text-4xl text-light-100 text-center">
            {params.category}
          </h1>
        </Container>
      </div>
      <Container className="mt-48">
        <CategoryItems items={categoryItems} />
        <CategoryNavLinks />
        <Description className="mt-28 lg:mt-40" />
      </Container>
    </>
  );
};

export const getStaticPaths = () => {
  const paths = categories.map(({ name }) => ({ params: { category: name } }));
  return { paths, fallback: false };
};

export default Category;
