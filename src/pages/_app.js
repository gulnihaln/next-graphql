import React from "react";
// import PropTypes from "prop-types";
// import { ApolloProvider } from "@apollo/client";
// import { UserProvider } from "@auth0/nextjs-auth0/client";
// import { ChakraProvider } from "@chakra-ui/react";

// exported
const MyApp = ({ Component, pageProps }) => {
  // const [client, setClient] = React.useState();
  
  // initApollo(pageProps).then((_client) => {
  //   setClient(_client);
  // });

    return <Component {...pageProps} />
  }

export default MyApp;
