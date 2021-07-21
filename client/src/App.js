import React from 'react';
import Navbar from './pages/assets/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
/*import ContactMe from './pages/Contact/Contact';
import Footer from './pages/Footer/Footer';*/


function App(){
    return(
        <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/dashboard' component={Dashboard}/>
                {/*<Route path='/Games' component={Games}/>
                <Route path='/wishlist' component= {Wishlist}/>
                <Route path='/Playercard' component= {Playercard}/>
                <Route path='/Contact' component= {Contact}/> */}
            </Switch>
            {/*<Footer/>*/}
        </Router>
        </>
    );
}

export default App;