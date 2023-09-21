import React from "react";
import { List, Grid, ListItem, Heading, Box } from "@chakra-ui/react";
import useGetCartItems from "../../data/cart/useGetCartItems";
import CartItem from "../../components/cart/CartItem";
const Cart = () => {
  const { data, mutate } = useGetCartItems();
  return (
    <Grid templateColumns={"2fr 1fr"}>
      <Box>
        <Heading size={"lg"} mb={5}>
          Your cart items
        </Heading>
        {data ? (
          <List>
            {data.cartItems.map((cartItem) => {
              return (
                <ListItem key={cartItem.id}>
                  <CartItem
                    onDelete={async () => {
                      await mutate();
                    }}
                    quantity={cartItem.quantity}
                    article={cartItem.article}
                  ></CartItem>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <></>
        )}
      </Box>
      <Box></Box>
    </Grid>
  );
};

export default Cart;
