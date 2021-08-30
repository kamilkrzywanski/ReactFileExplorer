import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './app/components/AUTH/Home';
import Profile from './app/components/AUTH/Profile';
import UserPage from './app/components/AUTH/UserPage';
import ProjectManagerPage from './app/components/AUTH/ProjectManagerPage';
import SignUp from './app/components/AUTH/SignUp';
import AdminPage from './app/components/AUTH/AdminPage';
import Login from './app/components/AUTH/Login';
import TreeList from './app/components/Tree/TreeList';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/home' exact={true} component={Home}/>
          <Route path='/profile' exact={true} component={Profile}/>
          <Route path='/user' exact={true} component={UserPage}/>
          <Route path='/pm' exact={true} component={ProjectManagerPage}/>
          <Route path='/admin' exact={true} component={AdminPage}/>
          <Route path='/signin' exact={true} component={Login}/>
          <Route path='/signup' exact={true} component={SignUp}/>  
          <Route path='/file' exact={true} component={TreeList}/>  

        </Switch>
      </Router>
    )
  }
}

export default App;