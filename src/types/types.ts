export type Category = {
  name: string;
  banner: string;
  id: number;
  childCategories: Category[];
  features: string[];
};
export type Pagination = {
  page: number;
  size: number;
};
export type Photo = {
  id: number;
  url: string;
  type: "MAIN" | "SECONDARY";
};
export type Article = {
  id: number;
  name: string;
  model: string;
  photos: Photo[];
  flair?: {
    flair: {
      name: string;
      color: string;
    };
  };
  discount?: {
    amount: number;
  };
  producer: {
    id: number;
    name: string;
  };
  price: Price[];
  category: {
    discount?: {
      amount: number;
    };
  };
};
export type Price = {
  id: number;
  value: number;
  addedAt: Date;
  type: "ECOMMERCE" | "RETAIL";
};
export type Role = "ADMIN" | "USER";
export type CartItem = {
  id: number;
  articleId: number;
  quantity: number;
};
