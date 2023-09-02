export const APIENDPOINTS = {
  auth: {
    login: "auth/login",
    register: "auth/register",
    refreshToken: "auth/refreshToken",
  },
  article: {
    find: (id: number) => "find/" + id,
  },
  category: {
    find: (id: number) => "category/" + id,
    findAll: "category/findall",
    findByName: (name: string) => `category/findname/${name}`,
  },
};
