import useAuth from "../../hooks/auth/useAuth";
import { CartItem } from "../../types/types";
import { APIENDPOINTS } from "../API_ENDPOINTS";
import useSWR from "swr";
const useGetCartItems = () => {
  const axios = useAuth();
  const fetchCart = async () => {
    return (await axios.get(APIENDPOINTS.cart.getCartItems)).data as {
      cartItems: CartItem[];
    };
  };
  const { data, isLoading, mutate } = useSWR(
    APIENDPOINTS.cart.getCartItems,
    () => fetchCart()
  );
  return { data, isLoading, mutate };
};
export default useGetCartItems;
