import { useState } from "react";
import { gql } from "@apollo/client";
import createApolloClient from "../../../apollo-client";
import { useRouter } from "next/router";

//
import {
  Container,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Button,
  Grid,
  Image,
  Spinner,
} from "@chakra-ui/react";

import Header from "@/components/header/Header";
import useGetProduct from "@/hooks/useGetProduct";
import AddToCartButton from "@/components/AddToCartButton";
import Rating from "@/components/Rating";

export default function SingleProduct() {
  const router = useRouter();
  const { slug } = router.query;

  const [action, { data, loading, error }] = useGetProduct();
  const { product } = data || {};
  const [count, setCount] = useState(1);

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

  if (!loading && error) {
    return (
      <Box w="100%" bg="white" p={6}>
        <Container maxW="container.md" pb={6} mt={8}>
          <Text textAlign="center" size="md">
            {product.slug} - Product ID: {product.id} NOT FOUND
          </Text>
        </Container>
      </Box>
    );
  }

  //   function AddToCartHandle () {

  // 	const currentCart = JSON.parse(localStorage.getItem("cartStorage") || "[]");
  // 	currentCart.push({ ...node, count })
  // 	localStorage.setItem("cartStorage", JSON.stringify(currentCart));
  // 	navigate("/cart");
  // }

  return (
    <>
      <Grid gridTemplateColumns={{ base: "1fr", md: "4fr 3fr" }} mt={6}>
        <Box>
          <Image
            src={product?.thumbnail?.url}
            alt="aa"
            w="500px"
            gridRowStart={1}
            gridRowEnd={3}
          ></Image>
        </Box>
        <Box>
          <UnorderedList listStyleType="none">
            <ListItem
              key={product?.name}
              fontSize="2xl"
              fontWeight="bold"
              mb={4}
            >
              {product?.name}
            </ListItem>
            <ListItem key={product?.category} mb={3}>
              {product?.category.name.toUpperCase()}
            </ListItem>
            <ListItem
              key={product?.pricing.priceRange.start.gross.amount}
              mb={3}
              fontWeight="semibold"
            >
              £{product?.pricing.priceRange.start.gross.amount}
            </ListItem>
            <ListItem>
              {product?.rating && product?.rating !== 0 ? (
                <Rating product={product} />
              ) : (
                <Rating isZero={true} />
              )}
            </ListItem>
            <ListItem mb={3}>Available</ListItem>
            {product?.weight && (
              <ListItem mb={3}>
                <Button>{`${
                  product?.weight.value
                } ${product?.weight.unit.toLowerCase()}`}</Button>
              </ListItem>
            )}
            <ListItem>
              <AddToCartButton
                product={product}
                // AddToCartHandle={AddToCartHandle}
                count={count}
                setCount={setCount}
              />
              <Text mt={4}>
                Pay later with Klarna. <a href="#">Learn more</a>
              </Text>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text fontSize="2xl" pl={4}>
            DESCRIPTION
          </Text>
          <Box>
            <UnorderedList>
              <ListItem listStyleType="none" key={product?.seoDescription}>
                {product?.seoDescription}
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

// query file
//
