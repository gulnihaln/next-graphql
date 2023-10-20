import useGetProducts from "@/hooks/useGetProducts";
import { Container, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Categories = () => {
  const router = useRouter();
  const { pathname } = router;
  const isCart = pathname === "/cart";
  const [action, { data, loading, error }] = useGetProducts();
  const { products } = data || {};

  const allCategories = products?.edges?.map(({ node }) => node.category.name);
  let singleCategory = [...new Set(allCategories)];

  return (
    <>
      {!isCart && (
        <Container justifyContent="space-around" mt={4} mb={6} maxWidth="full">
          <Link href="/">
            <Button
              border="1px solid gray"
              borderRadius="20px"
              bg="#fff"
              p={4}
              mr={2}
              mb={1}
              fontSize="lg"
              lineHeight={1}
              cursor="pointer"
              _hover={{ bg: "#000", color: "#fff" }}
            >
              All
            </Button>
          </Link>
          {singleCategory.map((category) => {
            return (
              <Link href={`/${category}`} key={category}>
                <Button
                  border="1px solid gray"
                  borderRadius="20px"
                  bg="#fff"
                  p={4}
                  mr={2}
                  mb={1}
                  fontSize="lg"
                  lineHeight={1}
                  cursor="pointer"
                  _hover={{ bg: "#000", color: "#fff" }}
                  _focus={{ bg: "#000", color: "#fff" }}
                  key={category}
                >
                  {category}
                </Button>
              </Link>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default Categories;
