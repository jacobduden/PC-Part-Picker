import React from 'react';
import './App.css';

import Navbar from './pages/assets/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './pages/assets/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import Games from './pages/GameExplorer/Games'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Wishlist from './pages/WishList/Wishlist';
import UnderConst from './pages/UnderConst/UnderConst';
import {ApolloProvider} from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({ uri: '/graphql' })

function App(){
    return(
        <ApolloProvider client={client}>
        <div className="bg">
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
                    <Route path='/underConst' component = {UnderConst}/>
                </Switch>
                <Footer/> 
            </Router>
        </div>
        </ApolloProvider>
    );
}

export default App;