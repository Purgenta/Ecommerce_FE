import { APIENDPOINTS } from "../API_ENDPOINTS";
import useSWR from "swr";
import axios from "../axios";
const fetcher = async (name: string) => {
  return (
    await axios.get(APIENDPOINTS.category.findCategoryFeatureAndValues, {
      params: { name },
    })
  ).data as { name: string; values: string[]; id: number }[];
};
const useGetCategoryFeatureValues = (name: string) => {
  const { data } = useSWR(
    APIENDPOINTS.category.findCategoryFeatureAndValues + name,
    () => fetcher(name)
  );
  return { data };
};
export default useGetCategoryFeatureValues;
