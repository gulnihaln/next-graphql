import React from "react";
import {  ApolloProvider } from '@apollo/client';
import { ChakraProvider } from "@chakra-ui/react";
import graphqlClient from "../gql/graphql-client";
import Header from "@/components/header/Header";
import Categories from "@/components/Categories";



const MyApp = ({ Component, pageProps }) => {
  
  const [search, setSearch] = React.useState("");

  return (
    <>
      <ApolloProvider client={graphqlClient}>
        <ChakraProvider>
          <Header search={search} setSearch={setSearch} />
          <Categories />
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </>
  );
};

export default MyApp;
