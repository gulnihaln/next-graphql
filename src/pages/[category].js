import ProductTile from "@/components/ProductTile";
import { useRouter } from "next/router";
import useGetProducts from "@/hooks/useGetProducts";
import { SimpleGrid } from "@chakra-ui/react";

const Category = () => {
  const router = useRouter();
  const { singleCategory } = router.query;
  const [action, { data, loading, error }] = useGetProducts();
  const { products } = data || {};

  return (
    <SimpleGrid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={6}
      spacing={6}
    >
      {products?.edges?.map(({ product }) => {
        if (product?.node.category.name === singleCategory) {
          return <ProductTile key={product?.node.id} product={product} />;
        }
      })}
    </SimpleGrid>
  );
};

export default Category;
