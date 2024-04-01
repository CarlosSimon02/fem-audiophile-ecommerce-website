import dataProducts from "@/data/data.json";
import { BASE_URL, categories } from "@/utils/constants";

import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const urls = [
    BASE_URL,
    `${BASE_URL}/checkout`,
    ...categories.map(({ name }) => `${BASE_URL}/${name}`),
    ...dataProducts.map(
      ({ category, slug }) => `${BASE_URL}/${category}/${slug}`
    ),
  ];

  return urls.map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  }));
};

export default sitemap;
