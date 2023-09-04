import React from "react";
import useGetCategoryFeatureValues from "../../../data/category/useGetCategoryFeatureValues";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  List,
  ListItem,
} from "@chakra-ui/react";
import CategoryFilter from "./CategoryFilter";
type Feature = {
  name: string;
  values: string[];
};
type CategoryFilterProps = {
  onChange: (features: Feature[]) => unknown;
  name: string;
};
const CategoryFilters = ({ onChange, name }: CategoryFilterProps) => {
  const { data } = useGetCategoryFeatureValues(name);
  console.log(onChange);
  if (!data) return <></>;
  return (
    <Accordion as={List} defaultIndex={[0]} allowMultiple>
      {data.map((feature) => (
        <AccordionItem my={5} fontSize={"xl"} as={ListItem} key={feature.name}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {feature.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel py={3}>
            <CategoryFilter values={feature.values}></CategoryFilter>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CategoryFilters;
