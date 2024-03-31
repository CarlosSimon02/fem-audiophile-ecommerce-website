import Details from "@/components/product/Details";
import Gallery from "@/components/product/Gallery";
import MoreDetails from "@/components/product/MoreDetails";
import OtherProducts from "@/components/product/OtherProducts";
import CategoryNavLinks from "@/components/shared/CategoryNavLinks";
import Container from "@/components/shared/Container";
import Description from "@/components/shared/Description";
import GoBack from "@/components/shared/GoBack";
import dataProducts from "@/data/data.json";
import { ProductItem } from "@/utils/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProductProps = { params: { category: string; product: string } };

export const generateMetadata = async ({
  params,
}: ProductProps): Promise<Metadata> => {
  const title = dataProducts.find(({ slug }) => {
    return slug === params.product;
  })?.name;

  return { title };
};

const Product = async ({ params }: ProductProps) => {
  const productItem = dataProducts.find(
    (item) => item.slug === params.product
  ) as ProductItem;

  if (!productItem) notFound();

  const {
    id,
    image,
    slug,
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
          slug={slug}
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

export function getStaticPaths() {
  const paths = (dataProducts as ProductItem[]).map(({ category, slug }) => {
    return {
      params: { category, product: slug },
    };
  });

  return { paths, fallback: false };
}

export default Product;
