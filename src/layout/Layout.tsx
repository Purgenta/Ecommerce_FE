import { Flex, Box, Button, Text, Container } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, Icon } from "@chakra-ui/icons";
import { FaHeart, FaBox } from "react-icons/fa6";
import { Link } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import useGetCategories from "../data/category/useGetCategories";
import CategoryMenu from "./CategoryMenu";
import { createPortal } from "react-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
type Props = {
  children?: ReactNode;
};
const mainHeader = document.querySelector("#main-header")!;
const Layout = ({ children }: Props) => {
  const [active, setActive] = useState(false);
  const { data } = useGetCategories();
  return (
    <>
      {createPortal(
        <Container as={"nav"}>
          <Container color={"blackAlpha.900"} backgroundColor={"blue.900"}>
            <Flex maxWidth={"1280px"} flexGrow={2} marginX={"auto"}>
              <Flex
                w="100%"
                color={"white"}
                paddingX={"4"}
                paddingY={"4"}
                justifyContent={"space-between"}
              >
                <Flex gap={"2"}>
                  <Flex alignItems={"center"} justifyContent={"center"}>
                    <Text>Call us</Text>
                    <PhoneIcon marginX={"1"} />
                  </Flex>
                  <Flex alignItems={"center"} justifyContent={"center"}>
                    <Text>Email us</Text>
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
            </Flex>
          </Container>
          <Container color={"blackAlpha.900"} background={"whiteAlpha.700"}>
            {data ? (
              <Flex
                flexGrow={2}
                paddingY={1}
                paddingX={4}
                maxWidth={"1280px"}
                marginX={"auto"}
                fontSize={"xl"}
              >
                <Button
                  position={"relative"}
                  onClick={() => setActive((prev) => !prev)}
                >
                  <Icon as={HamburgerIcon}></Icon>
                  <Text margin-left={3}>Products</Text>
                  {active ? (
                    <CategoryMenu
                      listProps={{
                        bg: "white",
                        position: "absolute",
                        top: "50px",
                        left: 0,
                        zIndex: 10,
                      }}
                      base="categories"
                      show={true}
                      depth={0}
                      hierachy={data}
                    ></CategoryMenu>
                  ) : (
                    <></>
                  )}
                </Button>
              </Flex>
            ) : (
              <></>
            )}
          </Container>
        </Container>,
        mainHeader
      )}
      <Flex
        alignItems={"center"}
        backgroundColor={"whiteAlpha.700"}
        padding={"2"}
        marginY={"4"}
      >
        <Box
          backgroundColor={"whiteAlpha.700"}
          maxWidth={"1280px"}
          marginX={"auto"}
          flexGrow={3}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
