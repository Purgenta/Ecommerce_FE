import { useEffect, useState } from "react";
import { Flex, Select, Text } from "@chakra-ui/react";
type Props = {
  onChange: (sort: string) => unknown;
};
const SortArticles = ({ onChange }: Props) => {
  const [sort, setSort] = useState("price desc");
  useEffect(() => {
    onChange(sort);
  }, [sort, onChange]);
  return (
    <Flex alignItems={"center"} gap={2}>
      <Text>Sort by:</Text>
      <Select
        backgroundColor={"gray.300"}
        display={"flex"}
        size={"md"}
        width={"auto"}
        onChange={(e) => {
          setSort(e.target.value);
        }}
      >
        <option defaultChecked value="price desc">
          Price descending
        </option>
        <option value={"price asc"}>Price ascending</option>
        <option value={"name asc"}>Name ascending</option>
        <option value={"name desc"}>Name descending</option>
      </Select>
    </Flex>
  );
};

export default SortArticles;
