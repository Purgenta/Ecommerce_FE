export const APIENDPOINTS = {
  auth: {
    login: "auth/login",
    register: "auth/register",
    refreshToken: "auth/refreshToken",
  },
  article: {
    find: (id: number) => "find/" + id,
    filter: "article/filterproducts",
  },
  category: {
    find: (id: number) => "category/" + id,
    findAll: "category/findall",
    findByName: `category/findbyname`,
    findCategoryFeatureAndValues: `category/findcategoryfeature&values`,
  },
};
