import CategoryItems from "@/components/category/CategoryItems";
import CategoryNavLinks from "@/components/shared/CategoryNavLinks";
import Container from "@/components/shared/Container";
import Description from "@/components/shared/Description";
import { categories, productsDataPath } from "@/utils/constants";
import { ProductItem } from "@/utils/types";
import { promises as fs } from "fs";
import { Metadata } from "next";

type CategoryProps = { params: { category: string } };

export const generateMetadata = ({ params }: CategoryProps): Metadata => {
  return {
    title: params.category.charAt(0).toUpperCase() + params.category.slice(1),
  };
};

export const getStaticPaths = async () => {
  const paths = categories.map(({ name }) => ({ params: { category: name } }));
  return { paths, fallback: false };
};

const getCategoryItems = async (category: string) => {
  const file = await fs.readFile(process.cwd() + productsDataPath, "utf-8");
  const productItems = JSON.parse(file).reverse() as ProductItem[];
  return productItems.filter((item) => item.category === category);
};

const Category = async ({ params }: CategoryProps) => {
  const productItems = await getCategoryItems(params.category);

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
        <CategoryItems items={productItems} />
        <CategoryNavLinks />
        <Description className="mt-28 lg:mt-40" />
      </Container>
    </>
  );
};

export default Category;
