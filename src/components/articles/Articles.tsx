import { useState } from "react";
import CategoryFilters from "../category/categoryfilter/CategoryFilters";
import { Flex, Heading, List, Box, ListItem } from "@chakra-ui/react";
import useGetFilteredProducts from "../../data/article/useGetFilteredProducts";
import { Spinner } from "@chakra-ui/react";
import SortArticles from "../category/categoryfilter/SortArticles";
import Article from "./Article";
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
  sort: string;
};
const Articles = ({ name }: ArticlesProps) => {
  const [filter, setFilter] = useState<FilterProps>({
    categoryName: name,
    page: 0,
    size: 15,
    sort: "price DESC",
  });
  const { data, isLoading } = useGetFilteredProducts(filter);
  return (
    <Box>
      <Box
        marginBlock={3}
        padding={2}
        borderBottom={"1px"}
        borderBottomStyle={"solid"}
        borderBottomColor={"black"}
      >
        <Heading fontSize={"2xl"}>Search results</Heading>
      </Box>
      <Flex flexWrap={"wrap"}>
        <CategoryFilters
          name={name}
          onChange={(values) => {
            setFilter((prev) => ({ ...prev, ...values }));
          }}
        ></CategoryFilters>
        <Box flexGrow={2}>
          <Flex flexGrow={2} justifyContent={"flex-end"}>
            <SortArticles
              onChange={(sort) => {
                setFilter((prev) => ({ ...prev, sort }));
              }}
            ></SortArticles>
          </Flex>
          {isLoading ? <Spinner></Spinner> : <></>}
          <List
            marginY={2}
            marginX={3}
            display={"grid"}
            placeItems={"center"}
            gap={4}
            gridTemplateColumns={"repeat(auto-fit,minmax(200px,275px))"}
          >
            {data ? (
              data.articles.map((item) => {
                return (
                  <ListItem height={"100%"} key={item.id}>
                    <Article item={item} key={item.id} />
                  </ListItem>
                );
              })
            ) : (
              <></>
            )}
          </List>
        </Box>
      </Flex>
    </Box>
  );
};

export default Articles;
