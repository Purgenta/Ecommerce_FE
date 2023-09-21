import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Image,
  IconButton,
  Heading,
  Flex,
  Grid,
  Button,
  Icon,
} from "@chakra-ui/react";
import useAddCartItem from "../../data/cart/useAddCartItem";
import { Article as Item } from "../../types/types";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
type Props = {
  item: Item;
};
const Article = ({ item }: Props) => {
  const coverImage = item.photos.find((photo) => photo.type === "MAIN")!;
  const ecommercePrice = item.price.find(
    (price) => price.type === "ECOMMERCE"
  )!;
  const retailPrice = item.price.find((price) => price.type === "RETAIL");
  const addItem = useAddCartItem();
  return (
    <Card height={"100%"}>
      <CardHeader display={"flex"} width={"100%"} justifyContent={"flex-end"}>
        <Button backgroundColor={"transparent"}>
          <Icon fontSize={"2xl"} fill={"blackAlpha.300"} as={FaHeart}></Icon>
        </Button>
      </CardHeader>
      <CardBody>
        <Image height={"150px"} marginX={"auto"} src={coverImage.url}></Image>
        <Heading size={"md"}>{item.name}</Heading>
        <Text>Model: {item.model}</Text>
      </CardBody>
      <CardFooter>
        <Flex
          justifyContent={"space-between"}
          flexGrow={1}
          alignItems={"center"}
        >
          <Grid gap={1}>
            {retailPrice ? (
              <Heading size={"sm"} color={"gray.400"}>
                Retail price: {`${retailPrice.value.toFixed(2)} \u20AC`}
              </Heading>
            ) : (
              <></>
            )}
            <Heading size={"lg"}>{`${ecommercePrice.value.toFixed(
              2
            )} \u20AC`}</Heading>
            {retailPrice && retailPrice.value > ecommercePrice.value ? (
              <Heading size={"sm"} color={"red.300"}>
                Save:{" "}
                {`${(retailPrice.value - ecommercePrice.value).toFixed(
                  2
                )} \u20AC`}
              </Heading>
            ) : (
              <></>
            )}
          </Grid>
          <IconButton
            onClick={async () => {
              return await addItem(item.id, 1);
            }}
            backgroundColor={"yellow.400"}
            variant={"outline"}
            aria-label="add-to-cart"
            icon={<FaCartShopping />}
          ></IconButton>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default Article;
