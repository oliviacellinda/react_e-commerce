import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

/**
 * About Route
 * When a component is set in Route, an object is passed as prop to the component (see below code).
 * By checking the prop through console.log, we can see that there are 3 objects inside.
 * 1. history (https://reacttraining.com/react-router/core/api/history) (https://drive.google.com/file/d/1fZPxYXhFMGC-4D8wOxvqkwvZjS4_4jqA/view?usp=sharing)
 * 2. location (https://reacttraining.com/react-router/core/api/location) (https://drive.google.com/file/d/1QliOPmnNHWuPCiX5NGPnjaD8q3ZcPgWI/view?usp=sharing)
 * 3. match (https://reacttraining.com/react-router/core/api/match) (https://drive.google.com/file/d/1Ya1t6RrxBQb8gBCBDc2vTONz7DrkuIbP/view?usp=sharing)
 * Various function or property available inside those three will be used in navigating.
 * 
 * 
 * Code fragment:
    const HatsPage = (props) => {
      console.log(props);
      return (
        <div>
          <h1>Hats Page</h1>
        </div>
      );
    };
 * 
 * 
 * About Switch
 * We can put many Routes inside Switch, but only first matched path will be used.
 */

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
