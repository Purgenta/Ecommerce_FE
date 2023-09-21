export const APIENDPOINTS = {
  auth: {
    login: "auth/login",
    register: "auth/register",
    refreshToken: "auth/refreshToken",
  },
  cart: {
    setItem: "cart/setitem",
    addItem: "cart/additem",
    getCartItems: "cart/cartdata",
    deleteCartItem: (id: number) => "cart/removeitem/" + id,
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
