import { useState } from "react";
import CategoryFilters from "../category/categoryfilter/CategoryFilters";
import { Container, Flex, Heading, List } from "@chakra-ui/react";
import useGetFilteredProducts from "../../data/article/useGetFilteredProducts";
type ArticlesProps = {
  name: string;
};
export type FilterProps = {
  name?: string;
  fromPrice?: number;
  toPrice?: number;
  features?: { id: number; values: string[] }[];
  producerId?: number;
  categoryName: string;
  page: number;
  size: number;
};
const Articles = ({ name }: ArticlesProps) => {
  const [filter, setFilter] = useState<FilterProps>({
    categoryName: name,
    page: 0,
    size: 15,
  });
  const { data } = useGetFilteredProducts(filter);
  console.log(data);
  return (
    <Container>
      <Container
        marginBlock={3}
        padding={2}
        borderBottom={"1px"}
        borderBottomStyle={"solid"}
        borderBottomColor={"black"}
      >
        <Heading fontSize={"2xl"}>Search results</Heading>
      </Container>
      <Flex>
        <CategoryFilters
          name={name}
          onChange={(values) => {
            setFilter((prev) => ({ ...prev, ...values }));
          }}
        ></CategoryFilters>
        <Container flexGrow={2}>
          <List></List>
        </Container>
      </Flex>
    </Container>
  );
};

export default Articles;
