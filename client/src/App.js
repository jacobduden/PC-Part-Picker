import React from 'react';
import './App.css';

import Navbar from './pages/assets/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Footer from './pages/assets/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import Games from './pages/Games/Games'

function App(){
    return(
        <div className="bg">
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Dashboard}/>
                    <Route path='/Games' component={Games}/>
                    {/* <Route path='/wishlist' component= {Wishlist}/>
                    <Route path='/Playercard' component= {Playercard}/>
                    <Route path='/Contact' component= {Contact}/> */}
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;