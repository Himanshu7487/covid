import Home from './component/Home';
import './App.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  
} from "@apollo/client";
import Header from './component/Header';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://covid19-graphql.herokuapp.com/"
})
function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <Home />
    </ApolloProvider>
  );
}

export default App;
