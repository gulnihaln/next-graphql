import React from "react";
import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";

const ProductTile = ({ product }) => {
  const isGBP = product?.node?.pricing?.priceRange?.start?.gross?.curreny !== "GBP";

  return (
    <Link href={`/product/${product?.node.slug}`}>
      <Flex
        w="100%"
        h="300px"
        bg="white"
        mt={4}
        p={6}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          role="group"
          p={{ base: 3, md: 6 }}
          display="flex"
          flexDirection="column"
          maxW="330px"
          w="full"
          bg="white"
          rounded="lg"
          alignItems="center"
          position="relative"
          justifyContent="space-around"
        >
          <Image
            width={100}
            height={100}
            alt={product?.node.name}
            src={product?.node.thumbnail?.url}
          />
          <Text fontSize="lg" mt={3}>
            {product?.node.name}
          </Text>
          <Text mt={3}>
            £{product?.node.pricing.priceRange.start.gross.amount.toFixed(2)}
          </Text>
        </Box>
        <Button colorScheme="grey" variant="outline" size="sm" maxW={14}>
          Add
        </Button>
      </Flex>
    </Link>
  );
};

export default ProductTile;
