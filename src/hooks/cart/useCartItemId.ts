import { useSelector } from "react-redux";
import { wishListSliceSelector } from "../../redux/slices/wishListSlice";

const useFavouriteId = () => {
  const { items } = useSelector(wishListSliceSelector);
  const cartItemId = new Set<number>(items.map((item) => item.id));
  return cartItemId;
};
export default useFavouriteId;
