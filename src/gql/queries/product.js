import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query product {
    product(channel: "uk", slug: "big-blue-bath-bomb") {
      name
      thumbnail {
        url
        alt
      }
      category {
        name
        slug
      }
      seoDescription
      description
      rating
      pricing {
        priceRange {
          start {
            gross {
              currency
              amount
            }
          }
        }
        priceRangeUndiscounted {
          start {
            net {
              currency
              amount
            }
          }
        }
      }
    }
  }
`;
