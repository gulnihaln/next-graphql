import { gql } from "@apollo/client";
import createApolloClient from "../../apollo-client";

// 
import useGetProducts from "@/hooks/useGetProducts";
import ProductList from "@/components/ProductList";

// import graphqlClient from "@/gql/graphql-client";


// export const getServerSideProps = async () => {
//   try {
//     const { data } = await graphqlClient.query({ query:ALL_PRODUCTS })
//     return { props: { data } }
//   } catch (error) {
//     return { props: { data: null } }
//   }
// }

export default function Home() {
  const [action, { data, loading, error }] =  useGetProducts();
  const { products } = data || {};

  return (
    <ProductList products={products?.edges} />
  );
}


// query file
// 