import { useLocation } from "react-router-dom";
import {
  Box,
  Card,
  CardBody,
  Image,
  List,
  ListItem,
  Heading,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useGetCategory from "../../data/category/useGetCategory";
import Articles from "../../components/articles/Articles";
const Categories = () => {
  console.log(`rendered`);
  const location = useLocation().pathname;
  const categoryName = location.split("/");
  const { data } = useGetCategory(categoryName[categoryName.length - 1]);
  const hasChildren = data && data.childCategories.length;
  return (
    <Box>
      <Grid as={List} templateColumns={"repeat(auto-fit,minmax(230px,1fr))"}>
        {hasChildren ? (
          data.childCategories.map((category) => {
            return (
              <GridItem as={ListItem} marginY={4} key={category.id}>
                <Link to={location + `/${category.name}`}>
                  <Card>
                    <CardBody>
                      <Image minWidth={"200px"} src={category.banner}></Image>
                      <Heading
                        marginY={2}
                        textAlign={"center"}
                        color={"blackAlpha.900"}
                        fontSize={"xl"}
                      >
                        {category.name}
                      </Heading>
                    </CardBody>
                  </Card>
                </Link>
              </GridItem>
            );
          })
        ) : (
          <></>
        )}
      </Grid>
      {data && !data.childCategories.length ? (
        <Articles name={categoryName[categoryName.length - 1]}></Articles>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Categories;
