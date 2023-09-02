import useSWR from "swr";
import { APIENDPOINTS } from "../API_ENDPOINTS";
import axios from "../axios";
import { Category } from "../../types/types";
const fetchCategory = async (name: string) => {
  return (await axios.get(APIENDPOINTS.category.findByName(name)))
    .data as Category;
};
const useGetCategory = (name: string) => {
  const { data, error } = useSWR(
    APIENDPOINTS.category.findByName(name),
    fetchCategory
  );
  return { data, error };
};
export default useGetCategory;
