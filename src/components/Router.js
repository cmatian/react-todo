import React from'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Notebook from './Notebook';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Notebook}/>
            <Route path="/notebook/:notebookId" component={App}/>
        </Switch>
    </BrowserRouter>
);

export default Router;
