import React from 'react';
import './App.css';
<<<<<<< HEAD
import Navbar from './pages/assets/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './pages/assets/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import Games from './pages/GameExplorer/Games'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup'
import Wishlist from './pages/WishList/Wishlist';
import UnderConst from './pages/UnderConst/UnderConst';
import { ApolloProvider, HttpLink, InMemoryCache } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-boost';

const link = new HttpLink({uri: '/graphql'})
const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
});
 
function App(){
    return(
        <ApolloProvider client={client}>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Dashboard}/>
                    <Route path='/Games' component={Games}/>
                    <Route path='/wishlist' component= {Wishlist}/>
                    <Route path='/Playercard' component= {UnderConst}/>
                    <Route path='/Contact' component= {Contact}/>
                    <Route path='/PrivacyPolicy' component= {PrivacyPolicy}/>
                    <Route path='/Login' component = {Login}/>
                    <Route path='/Signup' component = {Signup}/>
                    <Route path='/underConst' component = {UnderConst}/>
                </Switch>
                <Footer/> 
            </Router>
        </ApolloProvider>
    );
}
=======
import Dashboard from './comps/pages/Dashboard';
import Navbar from './pages/assets/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    </>

  );
};
>>>>>>> 731fe45a601eb09046455ed6c7dbe3ea06dbb435

export default App;
