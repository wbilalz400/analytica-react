import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import App from './App';
import LoginView from './views/LoginView'
import Slider from './components/Slider'
import RegisterView from './views/RegisterView'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeView from './views/HomeView';
import Card from './components/Cards/Cards'



ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Switch>
      <div>
        <Route exact path="/" component={Card}/>
        <Route exact path="/login" component={LoginView}/>
        <Route exact path="/register" component={RegisterView}/>
        <Route exact path="/home" component={HomeView}/>


      </div>
    </Switch> 
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
