import React, { Fragment, useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { ToastProvider } from "react-toast-notifications";

import Navbar from "./components/layout/Navbar";
import ContactUsPage from "./components/pages/ContactUs";
import BurgerMenu from "./components/layout/BurgerMenu";
import Home from "./components/pages/Home";
import Team from "./components/pages/Team";
import ScrollTop from "./components/layout/ScrollTop";

import "./index.css";

function App() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [goingUp, setGoingUp] = useState(false);

  return (
    <HashRouter>
      <ToastProvider>
        <Switch>
          <Fragment>
            <div className="App relative">
              <Navbar menuOpen={isMenuOpen} setMenuOpen={setisMenuOpen} />
              <BurgerMenu menuOpen={isMenuOpen} setMenuOpen={setisMenuOpen} />

              <Route path="/" exact>
                <ScrollTop goingUp={goingUp} />
                <Route path="/" exact>
                  <Home isMenuOpen={isMenuOpen} setGoingUp={setGoingUp} />
                </Route>
              </Route>
              <Route path="/contactus" component={ContactUsPage} />
              <Route path="/about" component={Team} />
            </div>
          </Fragment>
        </Switch>
      </ToastProvider>
    </HashRouter>
  );
}

export default App;
