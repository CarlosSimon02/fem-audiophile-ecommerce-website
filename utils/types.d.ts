type DeviceImages = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type ProductItem = {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: DeviceImages;
  category: "earphones" | "headphones" | "speakers";
  categoryImage: DeviceImages;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: DeviceImages;
    second: DeviceImages;
    third: DeviceImages;
  };
  others: {
    slug: string;
    name: string;
    image: DeviceImages;
  }[];
};

export type CartItem = {
  id: number;
  image: string;
  shortName: string;
  price: number;
  quantity: number;
};
