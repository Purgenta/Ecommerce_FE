import useSWR from "swr";
import { FilterProps } from "../../components/articles/Articles";
import axios from "../axios";
import { APIENDPOINTS } from "../API_ENDPOINTS";
import { Article } from "../../types/types";

const fetchFilteredProducts = async (filter: FilterProps) => {
  return (await axios.post(APIENDPOINTS.article.filter, filter))
    .data as Article[];
};
const useGetFilteredProducts = (filter: FilterProps) => {
  const { data, isLoading } = useSWR(filter, () =>
    fetchFilteredProducts(filter)
  );
  return { data, isLoading };
};
export default useGetFilteredProducts;
