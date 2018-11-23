import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { history } from "../_helpers/history";
import Footer from '../components/common/footer';
import Header from '../components/common/header';

import Home from '../pages/home';
import Dashboard from '../pages/dashboard';
import Account from '../pages/account';
import Transaction from '../pages/transactions';
import Extract from '../pages/extract';
import Department from '../pages/extra/department';
import Menu from '../pages/extra/menu';

class App extends Component {
  render() {
    return (
      <Router history={history} {...this.state}>
        <div className="container-wrapper">

          <Header history={history} {...this.state}></Header>

          <div className="main-wrapper">
            <div className="cont">

              <Route path="/" exact component={Home} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/accounts" exact component={Account} />
              <Route path="/transactions" exact component={Transaction} />
              <Route path="/extra" exact component={Extract} />

              <Route path="/extra/departments" exact component={Department} />
              <Route path="/extra/menus" exact component={Menu} />
              
            </div>
           
            <Footer></Footer>

          </div>

        </div >
      </Router>
    
    );
  }
}

export default App;
