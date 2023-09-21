import { Flex, Box, Button, Text, Grid, Badge } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, Icon } from "@chakra-ui/icons";
import { FaHeart, FaBox, FaUser, FaCartShopping } from "react-icons/fa6";
import { Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useState } from "react";
import useGetCategories from "../data/category/useGetCategories";
import CategoryMenu from "./CategoryMenu";
import { createPortal } from "react-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelector } from "../redux/slices/cartSlice";
import { authSelect } from "../redux/slices/authSlice";
const mainHeader = document.querySelector("#main-header")!;
const Layout = () => {
  const [active, setActive] = useState(false);
  const { data } = useGetCategories();
  const { items } = useSelector(cartSelector);
  const { isAuthenticated } = useSelector(authSelect);
  return (
    <>
      {createPortal(
        <Box as={"nav"}>
          <Box
            color={"blackAlpha.900"}
            paddingTop={4}
            paddingBottom={1}
            backgroundColor={"blue.900"}
          >
            <Flex maxWidth={"1280px"} flexGrow={2} marginX={"auto"}>
              <Flex
                w="100%"
                color={"white"}
                paddingX={4}
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
            <Grid
              padding={4}
              gridTemplateColumns={"1fr 3fr 1fr"}
              color={"white"}
              maxWidth={"1280px"}
              marginX={"auto"}
            >
              <Box>Logo placeholder</Box>
              <Box>Search bar placeholder</Box>
              <Flex justifyContent={"flex-end"} gap={4}>
                <Link
                  fontSize={"md"}
                  as={ReactRouterLink}
                  to={isAuthenticated ? "/logout" : "/login"}
                >
                  <Icon marginX={1} as={FaUser}></Icon>
                  <span>{isAuthenticated ? "Logout" : "Login"}</span>
                </Link>
                <Link fontSize={"md"} as={ReactRouterLink} to={"/login"}>
                  <Flex alignItems={"center"} position={"relative"}>
                    <Badge
                      top={-3}
                      left={-2}
                      backgroundColor={"yellow.400"}
                      position={"absolute"}
                    >
                      {items.length}
                    </Badge>
                    <Icon marginX={1} as={FaCartShopping} />
                    <span>Cart</span>
                  </Flex>
                </Link>
              </Flex>
            </Grid>
          </Box>
          <Box
            color={"blackAlpha.900"}
            paddingY={2}
            background={"whiteAlpha.700"}
          >
            {data ? (
              <Flex
                flexGrow={2}
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
                    <Box
                      display={"grid"}
                      bg={"white"}
                      position={"absolute"}
                      top={"50px"}
                      fontSize={"medium"}
                      left={0}
                      zIndex={10}
                    >
                      <CategoryMenu
                        listProps={{
                          backgroundColor: "inherit",
                          minWidth: "300px",
                        }}
                        base="categories"
                        show={true}
                        depth={0}
                        hierachy={data}
                      ></CategoryMenu>
                    </Box>
                  ) : (
                    <></>
                  )}
                </Button>
              </Flex>
            ) : (
              <></>
            )}
          </Box>
        </Box>,
        mainHeader
      )}
      <Flex
        alignItems={"center"}
        backgroundColor={"whiteAlpha.700"}
        padding={"2"}
      >
        <Box
          backgroundColor={"whiteAlpha.300"}
          maxWidth={"1280px"}
          marginX={"auto"}
          flexGrow={3}
        >
          {<Outlet />}
        </Box>
      </Flex>
    </>
  );
};

export default Layout;
