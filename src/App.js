import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Characters from "./components/Characters";
import Quests from "./components/Quests";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Quests />
    <Characters />
  </ApolloProvider>
);

export default App;
