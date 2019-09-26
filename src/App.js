import React from 'react';
import './App.css';
import SearchRecipe from './page/SearchRecipe'
import Home from './page/Home';
import {Route, Switch} from 'react-router-dom'
import Furnitur from './page/Furnitur';
import 'bootstrap/dist/css/bootstrap.min.css';
import Default from './component/furniture/Default'

const App = () => {
 
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/recipe/" component={SearchRecipe} /> 
      <Route exact path="/furniture/" component={Furnitur} />
      <Route exact path="/furniture/:link" component={Furnitur} />
      <Route component={Default} />
    </Switch>
  );
}

export default App;
