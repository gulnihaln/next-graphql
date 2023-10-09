import { ApolloClient, InMemoryCache } from '@apollo/client';


const graphqlClient = new ApolloClient({
    uri: 'https://unicorn-staging.eu.saleor.cloud/graphql/',
    cache: new InMemoryCache(),
});
  
export default graphqlClient;