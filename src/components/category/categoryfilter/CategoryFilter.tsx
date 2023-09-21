import { Checkbox, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

type CategoryFilterProps = {
  values: string[];
  onChange: (values: string[]) => unknown;
};
const CategoryFilter = ({ values, onChange }: CategoryFilterProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  useEffect(() => {
    onChange(selected);
  }, [selected]);
  return (
    <Stack spacing={[1, 5]}>
      {values.map((value) => {
        return (
          <Checkbox
            onChange={(event) => {
              const isChecked = event.target.checked;
              if (!isChecked)
                setSelected((prev) => prev.filter((val) => val !== value));
              else {
                setSelected((prev) => {
                  prev.push(value);
                  return [...prev];
                });
              }
            }}
            colorScheme="blue"
            key={value}
            size={"md"}
          >
            {value}
          </Checkbox>
        );
      })}
    </Stack>
  );
};

export default CategoryFilter;
