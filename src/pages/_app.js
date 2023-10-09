import React from "react";
// import PropTypes from "prop-types";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
// import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ChakraProvider } from "@chakra-ui/react";
import graphqlClient from "../gql/graphql-client";

// const graphqlClient = new ApolloClient({
//   uri: 'https://flyby-router-demo.herokuapp.com/',
//   cache: new InMemoryCache(),
// });

const MyApp = ({ Component, pageProps }) => {
  
  // const [client, setClient] = React.useState();

  // initApollo(pageProps).then((_client) => {
  //   setClient(_client);
  // });

  return (
    <>
      <ApolloProvider client={graphqlClient}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
