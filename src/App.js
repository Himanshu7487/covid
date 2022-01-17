import Home from './component/Home';
import './App.css';
// import Header from './component/Header';
// import Style from './styled/Style';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  
} from "@apollo/client";
import Header from './component/Header';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: "http://localhost:12000/"
  uri: "https://covid19-graphql.herokuapp.com/"
})
function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
      <Home />
      {/* <Style /> */}
    </ApolloProvider>
  );
}

export default App;
