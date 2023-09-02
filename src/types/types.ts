export type Category = {
  name: string;
  banner: string;
  id: number;
  childCategories: Category[];
  features: string[];
};
