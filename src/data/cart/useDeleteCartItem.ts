import { useToast } from "@chakra-ui/react";
import useAuth from "../../hooks/auth/useAuth";
import { cartSelector, setCart } from "../../redux/slices/cartSlice";
import { APIENDPOINTS } from "../API_ENDPOINTS";
import { useSelector, useDispatch } from "react-redux";
const useDeleteCartItem = () => {
  const axios = useAuth();
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();
  const toast = useToast();
  const deleteItem = async (id: number) => {
    try {
      await axios.delete(APIENDPOINTS.cart.deleteCartItem(id));
      dispatch(setCart(cart.items.filter((item) => item.id !== id)));
      toast({ description: "Succesfully deleted item", status: "success" });
    } catch (error) {
      toast({
        description: "Error while deleting the product",
        status: "error",
      });
    }
  };
  return deleteItem;
};
export default useDeleteCartItem;
