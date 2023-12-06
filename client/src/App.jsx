// import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'; 
import { Outlet } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import SignUp from './pages/SignUp.jsx';
import Footer from './components/Footer';
import Header from './components/Header.jsx';
// import Login from './pages/Login.jsx';
// import Home from './pages/Home';

// import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header/>
  
        <Outlet />
      <Footer/>
    </ApolloProvider>
  );
}

export default App;