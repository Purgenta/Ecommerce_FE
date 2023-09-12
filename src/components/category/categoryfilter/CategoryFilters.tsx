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
import { FilterProps } from "../../articles/Articles";
import CategoryFilter from "./CategoryFilter";
import { useEffect, useState } from "react";
type CategoryFilterStates = Omit<FilterProps, "page" | "size" | "sort">;
type CategoryFilterProps = {
  onChange: (filter: CategoryFilterStates) => unknown;
  name: string;
};

const CategoryFilters = ({ onChange, name }: CategoryFilterProps) => {
  const { data } = useGetCategoryFeatureValues(name);
  const [filter, setFilter] = useState<CategoryFilterStates>({
    categoryName: name,
  });
  useEffect(() => {
    onChange(filter);
  }, [filter, onChange]);
  if (!data) return <></>;
  return (
    <Accordion as={List} defaultIndex={[0]} allowMultiple>
      {data.map((feature) => (
        <AccordionItem my={5} as={ListItem} key={feature.name}>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={"medium"}
                fontWeight={"bold"}
              >
                {feature.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel py={3}>
            <CategoryFilter
              onChange={(values) => {
                setFilter((prev) => {
                  const features = prev.features;
                  if (!features && !values.length) return prev;
                  if (!features && values.length)
                    return { ...prev, features: [{ id: feature.id, values }] };
                  else {
                    if (!values.length && features)
                      return {
                        ...prev,
                        features: features.filter((feat) => {
                          feat.id !== feature.id;
                        }),
                      };
                    const newFeature = features?.find(
                      (feat) => feat.id === feature.id
                    );
                    if (!newFeature) {
                      return {
                        ...prev,
                        features: [...features!, { id: feature.id, values }],
                      };
                    } else {
                      newFeature.values = values;
                      return { ...prev };
                    }
                  }
                });
              }}
              values={feature.values}
            ></CategoryFilter>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CategoryFilters;
