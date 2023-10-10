import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProductTile from "./ProductTile";

const ProductList = ({ products = [], loading }) => {
  console.log("🚀 ~ products:", products)
  return (
    <Container maxW="container.xl" px={0}  bg={'#F4F2F4'} top={4}>
      <SimpleGrid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
        // position="relative"
        spacing={6}
      >
        {products?.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ProductList;
