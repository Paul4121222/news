import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import history from '../history';
import Header from './Header';
import New from './New';
import Sports from './Sports';
import Health from './Health';
class App extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Router history={history}>
                    
                    <Header />
                    <Route path='/' exact component={New} />
                    <Route path='/sports' exact component={Sports} />
                    <Route path='/health' exact component={Health} />
            
                </Router>
            </React.Fragment>
        )
    }
}

export default App;