import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    /**
     * auth.onAuthStateChanged() will return a function that will unsubscribe or sign out the linked account.
     *
     * When we sign in using third party account like in this case,
     * there will be a communication between our app and Firebase to check if the account is still signed in.
     * If we do nothing, Firebase will determine the active user in our app based on the last sign in activity.
     */

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // Listener for checking any change in the document
        // Further info: https://firebase.google.com/docs/firestore/query-data/listen
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
