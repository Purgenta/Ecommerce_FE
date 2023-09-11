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
};
export type Article = {
  id: number;
  name: string;
  model: string;
  photos: string[];
  producer: {
    id: number;
    name: string;
  };
  price: string[];
};
