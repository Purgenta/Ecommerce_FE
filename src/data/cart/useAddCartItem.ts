import useAuth from "../../hooks/auth/useAuth";
import { APIENDPOINTS } from "../API_ENDPOINTS";
import useRequireAuth from "../../hooks/auth/useRequireAuth";
const useAddCartItem = () => {
  const axios = useAuth();
  const checkAuth = useRequireAuth();
  const addCartItem = async (articleId: number, quantity: number) => {
    if (!checkAuth()) return false;
    return await axios.post(APIENDPOINTS.cart.addItem, {
      articleId,
      quantity,
    });
  };
  return addCartItem;
};
export default useAddCartItem;
