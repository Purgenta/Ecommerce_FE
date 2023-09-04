import { CategoryHierachy } from "../data/category/useGetCategories";
import { Icon, Link, List, ListItem, ListProps } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from "react";
type Props = {
  hierachy: CategoryHierachy[];
  depth: number;
  show: boolean;
  base: string;
  listProps?: ListProps;
};
const CategoryMenu = ({ hierachy, depth, show, base, listProps }: Props) => {
  const [showSub, setShowSub] = useState(
    new Array<boolean>(hierachy.length + 1).fill(false)
  );
  if (depth > 1) return <></>;
  return (
    <List
      position={"absolute"}
      top={0}
      left={"100%"}
      display={depth < 1 || show ? undefined : "none"}
      {...listProps}
    >
      {hierachy.map((category, index) => {
        const hasChildren = category.children.length > 0;
        const href = `${base}/${category.name}`;
        return (
          <ListItem
            border={"1px solid black"}
            padding={"1"}
            position={"relative"}
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
            <Link
              display={"flex"}
              alignItems={"center"}
              to={href}
              as={ReactRouterLink}
            >
              {category.name}
              {hasChildren ? <Icon as={FaAngleRight}></Icon> : <></>}
            </Link>
            {hasChildren ? (
              <CategoryMenu
                listProps={{ bg: "white" }}
                base={href}
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
