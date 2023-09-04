import { Checkbox, Stack } from "@chakra-ui/react";
type CategoryFilterProps = {
  values: string[];
};
const CategoryFilter = ({ values }: CategoryFilterProps) => {
  return (
    <Stack>
      {values.map((value) => {
        return (
          <Checkbox spacing={[1, 5]} colorScheme="blue" key={value} size={"md"}>
            {value}
          </Checkbox>
        );
      })}
    </Stack>
  );
};

export default CategoryFilter;
