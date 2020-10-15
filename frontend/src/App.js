import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Product from "./pages/Product";
import Alert from "./components/alert/Alert";
import Cart from "./components/cart/cart";
import ShoppingCart from "./pages/ShoppinCart";
import "./styles/main.css";
// redux
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Header />
          <div className="page-container">
            <Alert />
            <Switch>
              <Route exact path="/auth">
                <Auth />
              </Route>
              <Route exact path="/product">
                <Product />
              </Route>
              <Route exact path="/cart">
                <ShoppingCart />
              </Route>
              <Route exact path="/">
                <Landing />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
