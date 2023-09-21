import useAuth from "../../hooks/auth/useAuth";
import { APIENDPOINTS } from "../API_ENDPOINTS";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, setCart } from "../../redux/slices/cartSlice";
import { CartItem } from "../../types/types";
const useSetCartItem = () => {
  const axios = useAuth();
  const toast = useToast();
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const setItem = async (articleId: number, quantity: number) => {
    try {
      const cartItem = (
        await axios.put(APIENDPOINTS.cart.setItem, {
          articleId,
          quantity,
        })
      ).data as CartItem;
      toast({
        description: "Successfully updated quantity",
        status: "success",
      });
      dispatch(
        setCart([
          ...cart.items.filter((item) => item.articleId !== cartItem.articleId),
          cartItem,
        ])
      );
    } catch (error) {
      toast({
        description: "An error occured while trying to update the quantity",
        status: "error",
      });
    }
  };
  return setItem;
};
export default useSetCartItem;
