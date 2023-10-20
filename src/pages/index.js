import { Container, Box, Text } from "@chakra-ui/react";

// 
import useGetProducts from "@/hooks/useGetProducts";
import ProductList from "@/components/ProductList";


export default function Home() {
  const [action, { data, loading, error }] =  useGetProducts();
  const { products } = data || {};

  if (!loading && error) {
    return (
        <Box w="100%" bg="white" p={6}>
          <Container maxW="container.md" pb={6} mt={8}>
            <Text textAlign="center" size="md">
              NO PRODUCTS FOUND
            </Text>
          </Container>
        </Box>
    );
  }

  return (
    <>
      <ProductList products={products?.edges} loading={loading} />
    </>
  );
}

