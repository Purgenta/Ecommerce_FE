import { useState } from "react";
import { Article } from "../../types/types";
import {
  Box,
  Select,
  Flex,
  Image,
  Grid,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { calculatePrice } from "../../misc/article/article";
import useSetCartItem from "../../data/cart/useSetCartItem";
import { FaX } from "react-icons/fa6";
import useDeleteCartItem from "../../data/cart/useDeleteCartItem";
type Props = {
  article: Article;
  quantity: number;
  onDelete: () => Promise<unknown>;
};
const CartItem = ({ article, quantity, onDelete }: Props) => {
  const cover = article.photos.find((photo) => photo.type === "MAIN")!;
  const [itemCount, setItemCount] = useState(quantity);
  const { price } = calculatePrice(article);
  const setItem = useSetCartItem();
  const deleteItem = useDeleteCartItem();
  return (
    <Grid gridTemplateColumns={"2fr 1fr 1fr 1fr"} gap={3}>
      <Flex>
        <Image width={"100px"} src={cover.url}></Image>
        <Heading size={"sm"}>{article.name}</Heading>
      </Flex>
      <Box>
        <Select
          onChange={async (e) => {
            await setItem(article.id, +e.target.value);
            setItemCount(+e.target.value);
          }}
          defaultValue={itemCount}
        >
          {new Array(20).fill(0).map((val, index) => {
            return (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            );
          })}
        </Select>
      </Box>
      <Box>
        <Text>{(price * itemCount).toFixed(2)}</Text>
      </Box>
      <Box>
        <IconButton
          aria-label="delete-item"
          onClick={async () => {
            await deleteItem(article.id);
            await onDelete();
          }}
          icon={FaX}
        ></IconButton>
      </Box>
    </Grid>
  );
};

export default CartItem;
