import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home
} from './pages'
import React from 'react'
import Register from "./pages/Register";
import AfterRegis from "./pages/AfterRegis";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/scan">
          {/* <Scan /> */}
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/done'>
          <AfterRegis />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
