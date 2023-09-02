import { Flex, Container, Box } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, Icon } from "@chakra-ui/icons";
import { FaHeart, FaBox } from "react-icons/fa6";
import { Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import useGetCategories from "../data/category/useGetCategories";
import CategoryMenu from "./CategoryMenu";
type Props = {
  children?: ReactNode;
};
const Layout = ({ children }: Props) => {
  const { data } = useGetCategories();
  return (
    <Container>
      <Flex
        w="100%"
        backgroundColor={"blue.900"}
        color={"white"}
        paddingX={"4"}
        paddingY={"4"}
        justifyContent={"space-between"}
      >
        <Flex gap={"2"}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            Call us
            <PhoneIcon marginX={"1"} />
          </Flex>
          <Flex alignItems={"center"} justifyContent={"center"}>
            Email us
            <Link marginX={"1"} href="mailto:someemaginary@gmail.com">
              <EmailIcon></EmailIcon>
            </Link>
          </Flex>
        </Flex>
        <Flex gap={"3"}>
          <Flex gap={"2"} alignItems={"center"}>
            <Icon as={FaBox}></Icon>
            Order status
          </Flex>
          <Flex gap={"2"} alignItems={"center"}>
            <Icon as={FaHeart}></Icon>Wish list
          </Flex>
        </Flex>
      </Flex>
      {data ? (
        <Flex padding="1" width={"100"} fontSize={"xl"}>
          <CategoryMenu
            base="categories"
            show={true}
            depth={0}
            hierachy={data}
          ></CategoryMenu>
          <Box flexGrow={2}></Box>
        </Flex>
      ) : (
        <></>
      )}
      {children}
    </Container>
  );
};

export default Layout;
