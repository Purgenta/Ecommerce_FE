import { CategoryHierachy } from "../data/category/useGetCategories";
import { Icon, Link, List, ListItem, ListProps } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
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
    new Array<boolean>(hierachy.length).fill(false)
  );
  if (depth > 1) return <></>;
  return (
    <List
      position={"absolute"}
      top={"0"}
      as={motion.ul}
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: "-100%" }}
      exit={{ opacity: 0, x: "100%" }}
      transition={"0.5s ease in"}
      left={"100%"}
      display={depth < 1 || show ? "grid" : "none"}
      rowGap={2}
      {...listProps}
    >
      {hierachy.map((category, index) => {
        const hasChildren = category.children.length > 0;
        const href = `${base}/${category.name}`;
        return (
          <AnimatePresence key={category.id}>
            <ListItem
              _hover={{ backgroundColor: "gray.100" }}
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
                  showSubCateg[index] = false;
                  return showSubCateg;
                });
              }}
            >
              <Link
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                padding={1.5}
                to={href}
                as={ReactRouterLink}
              >
                {category.name}
                {hasChildren ? <Icon as={FaAngleRight}></Icon> : <></>}
              </Link>
              {hasChildren && showSub[index] ? (
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
          </AnimatePresence>
        );
      })}
    </List>
  );
};

export default CategoryMenu;
