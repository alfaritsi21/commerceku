import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './App.scss';
import 'antd/dist/antd.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";


function App() {
  return (

    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <ProductDetail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>

    </Router>



  );
}

export default App;
