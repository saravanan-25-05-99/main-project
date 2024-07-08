import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App(){
    treturn(
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component = {Home} />
                {/* Add more routes here */}
                </Switch>
                <Footer />
        </Router>
    );
}

export default App;