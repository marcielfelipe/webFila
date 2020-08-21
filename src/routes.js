import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import Painel from './pages/Painel';
import Admin from './pages/Admin';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/'exact component={Painel}/>
            <Route  path='/admin'  component={Admin}/>
        </Switch>
        </BrowserRouter>
    );
}