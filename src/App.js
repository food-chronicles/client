import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home
} from './pages'
import Register from "./pages/Register";

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
      </Switch>
    </Router>
  );
}

export default App;
