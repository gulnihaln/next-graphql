import React, { useState } from "react";
import { SimpleGrid, Box, Button, Text, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import CartItem from "../components/CartItem";

const Cart = ({ loading = false}) => {
  const [currentCart, setCurrentCart] = useState([]);

  const totalItems = currentCart.reduce((acc, curr) => {
    return (acc += curr.count);
  }, 0);

  const total = currentCart.reduce((acc, curr) => {
    return (acc += curr.count * curr.pricing.priceRange.start.gross.amount);
  }, 0);

  if (loading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        m="0 auto"
      />
    );
  }
  return (
    <>
      <SimpleGrid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "60% 40%",
        }}
        gap={2}
        spacing={6}
        mt={8}
		mr={6}
		ml={6}
      >
        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Your Bag
          </Text>
          <Text fontSize="lg">Items in your bag are not reserved.</Text>
        </Box>
        <Text fontSize="lg" fontWeight="semibold">Order Summary</Text>
        <Box>
          {currentCart.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                totalItems={totalItems}
                total={total}
              />
            );
          })}
        </Box>
        <Box>
          <Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Text>{`${totalItems} item${totalItems > 1 ? "s" : ""}`}</Text>
              <p>£ {total.toFixed(2)}</p>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Text>Delivery</Text>
              <Text>FREE</Text>
            </Box>
            <Box>
              <Text>TOTAL</Text>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Button mt={4} mb={4} bg="#000" color="#fff" border="1px solid gray" _hover={{ bg:"#fff", color:"#000"}} width="100%" onClick={() => HandleCheckout()}>CHECKOUT</Button>
            <Link href="/" width="full">
              <Button mt={4} mb={4} bg="#fff" border="1px solid gray" _hover={{ bg:"#000", color:"#fff"}} width="100%">Continue to Shopping</Button>
            </Link>
          </Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Cart;
