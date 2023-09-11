import useSWR from "swr";
import { APIENDPOINTS } from "../API_ENDPOINTS";
import axios from "../axios";
export type CategoryHierachy = {
  id: number;
  name: string;
  children: CategoryHierachy[];
};
const fetchCategories = async () => {
  return (await axios.get(APIENDPOINTS.category.findAll))
    .data as CategoryHierachy[];
};
const useGetCategories = () => {
  const { data, error, isLoading } = useSWR(
    APIENDPOINTS.category.findAll,
    fetchCategories
  );
  return { data, error, isLoading };
};
export default useGetCategories;
