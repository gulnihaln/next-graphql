import { gql } from "@apollo/client";

export const ALL_PRODUCTS = gql`
  query Products {
    products(channel: "uk", first: 40) {
      edges {
        node {
          id
          name
          pricing {
            displayGrossPrices
          }
          thumbnail {
            url
            alt
          }
          category {
            name
          }
        }
      }
    }
  }
`;
