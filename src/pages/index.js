import { gql } from "@apollo/client";
import createApolloClient from "../../apollo-client";
// 
import useGetProducts from "@/hooks/useGetProducts";

// export async function getStaticProps ()  {
//   const client = createApolloClient();
//   const { data } = await client.query({
//     query: gql`
//       query Products {
//         products(channel: "uk", first: 40) {
//           edges {
//             node {
//               id
//               name
//               pricing {
//                 displayGrossPrices
//               }
//               thumbnail {
//                 url
//                 alt
//               }
//               category {
//                 name
//               }
//             }
//           }
//         }
//       }
//     `,
//   })
//   return {
//     props: {
//       products: data.products,
//     },
//   };

// }

export default function Home({ products }) {
  const { data, loading, error } =  useGetProducts();
  return (
    <div>
      {products?.edges?.map((product) => (
        <div key={product.node.id}>
              <p>{product.node.name}</p>
        </div>
      ))}
    </div>
  );
}


// query file
// 