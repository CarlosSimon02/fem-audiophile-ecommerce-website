import Details from "@/components/product/Details";
import Gallery from "@/components/product/Gallery";
import GoBack from "@/components/product/GoBack";
import MoreDetails from "@/components/product/MoreDetails";
import OtherProducts from "@/components/product/OtherProducts";
import CategoryNavLinks from "@/components/shared/CategoryNavLinks";
import { Container } from "@/components/shared/Container";
import Description from "@/components/shared/Description";
import { productsDataPath } from "@/utils/constants";
import { ProductItem } from "@/utils/types";
import { promises as fs } from "fs";
import { notFound } from "next/navigation";

type ProductProps = { params: { category: string; product: string } };

export const getStaticPaths = async () => {
  const file = await fs.readFile(process.cwd() + productsDataPath, "utf-8");
  const paths = JSON.parse(file).map(({ category, slug }: ProductItem) => ({
    params: { category, product: slug },
  }));

  return { paths, fallback: false };
};

const getProductItem = async (slug: string) => {
  const file = await fs.readFile(process.cwd() + productsDataPath, "utf-8");
  const productItems: ProductItem[] = JSON.parse(file);
  return productItems.find((item) => item.slug === slug);
};

const Product = async ({ params }: ProductProps) => {
  const productItem = await getProductItem(params.product);

  if (!productItem) notFound();

  const {
    id,
    image,
    categoryImage,
    name,
    shortName,
    description,
    price,
    new: isNew,
    features,
    includes,
    gallery,
    others,
  } = productItem;

  return (
    <Container>
      <GoBack className="mt-4 sm:mt-8 lg:mt-20" />
      <div className="flex flex-col gap-[5.5rem] sm:gap-[7.5rem] lg:gap-[10rem] mt-6 sm:mt-14 mb-44">
        <Details
          id={id}
          image={image}
          cartImage={categoryImage.desktop}
          name={name}
          shortName={shortName}
          description={description}
          price={price}
          isNew={isNew}
        />
        <MoreDetails features={features} includes={includes} />
        <Gallery productName={name} images={gallery} />
        <OtherProducts others={others} />
      </div>
      <CategoryNavLinks />
      <Description className="mt-28 sm:mt-40" />
    </Container>
  );
};

export default Product;
