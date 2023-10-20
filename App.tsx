import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AppNavigator from "./src/navigation/AppNavigator";

const client = new ApolloClient({
  uri: "YOUR_GRAPHQL_ENDPOINT",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
};

export default App;
