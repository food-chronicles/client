import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { 
  Home,
  Scan,
  Detail
} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/scan">
          <Scan />
        </Route>
        <Route path="/product/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
