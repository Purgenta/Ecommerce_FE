import React from "react";
import CategoryFilters from "../category/categoryfilter/CategoryFilters";
import { Container, Flex, Heading, List } from "@chakra-ui/react";
type ArticlesProps = {
  name: string;
};
const Articles = ({ name }: ArticlesProps) => {
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
          onChange={(values) => console.log(values)}
        ></CategoryFilters>
        <Container flexGrow={2}>
          <List></List>
        </Container>
      </Flex>
    </Container>
  );
};

export default Articles;
