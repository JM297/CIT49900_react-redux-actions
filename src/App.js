import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './css/App.css';
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import StatusPage from "./components/Blog/StatusPage";
import Products from "./components/Products/Products";
import ProductPage from "./components/Products/ProductPage";
import Nav from "./components/Nav/Nav";
import {connect} from "react-redux";

function App(props) {
  return (
      <Router>
        <div className="App" style={{backgroundColor: props.color}}>
          <Nav/>
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/blog/status/:id"} component={StatusPage}/>
            <Route path={"/blog"} component={Blog}/>
            <Route path={"/products/item/:id"} component={ProductPage}/>
            <Route path={"/products"} component={Products}/>
          </Switch>
        </div>
      </Router>
  );
}

const mapStateToProps = (state)=>{
    return {
        color: state.color
    }
};

export default connect(mapStateToProps)(App);
