import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Characters from "./components/Characters";
import Quests from "./components/Quests";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/quests" element={<Quests />} />
      </Routes>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
