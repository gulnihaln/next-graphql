import { gql } from "@apollo/client";

export const ALL_PRODUCTS = gql`
  query Products {
    products(channel: "uk", first: 40) {
      edges {
        node {
          id
          name
          pricing {
            priceRange {
								start {
									gross {
										currency
										amount
									}
								}
							}
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
