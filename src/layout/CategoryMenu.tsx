import { CategoryHierachy } from "../data/category/useGetCategories";
import { Link, List, ListItem } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useState } from "react";
type Props = {
  hierachy: CategoryHierachy[];
  depth: number;
  show: boolean;
  base: string;
};
const CategoryMenu = ({ hierachy, depth, show, base }: Props) => {
  const [showSub, setShowSub] = useState(
    new Array(hierachy.length + 1).fill(false)
  );
  console.log(depth || show);
  if (depth > 1) return <></>;
  return (
    <List display={depth === 1 || show ? undefined : "none"}>
      {hierachy.map((category, index) => {
        return (
          <ListItem
            border={"1px solid black"}
            padding={"1"}
            onMouseEnter={() =>
              setShowSub((prev) => {
                const showSubCateg = [...prev];
                showSubCateg[index] = true;
                return showSubCateg;
              })
            }
            onMouseLeave={() => {
              setShowSub((prev) => {
                const showSubCateg = [...prev];
                showSub[index] = false;
                return showSubCateg;
              });
            }}
            key={category.id}
          >
            <Link to={base + `/${category.name}`} as={ReactRouterLink}>
              {category.name.charAt(0).toUpperCase() +
                category.name.slice(1, category.name.length)}
            </Link>
            {category.children.length ? (
              <CategoryMenu
                base={base + `/${category.name}`}
                show={showSub[index]}
                depth={depth + 1}
                hierachy={category.children}
              ></CategoryMenu>
            ) : (
              <></>
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

export default CategoryMenu;
