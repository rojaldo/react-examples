import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './containers/calculatorcontainer';
import Heroes from './containers/heroescontainer';
import Beers from './containers/beerscontainer';
import Apod from './components/apod/apod';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import Trivial from './components/trivial/trivial';

function App() {

  return (

    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
          <a className="navbar-brand" href="#">React Samples</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/calculator">Calculator</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/heroes">Heroes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/beers">Beers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/apod">Apod</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/trivial">Trivial</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <Switch>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/heroes">
              <Heroes />
            </Route>
            <Route path="/beers">
              <Beers />
            </Route>
            <Route path="/apod">
              <Apod />
            </Route>
            <Route path="/trivial">
              <Trivial />
            </Route>
            <Route path="/">
              <Redirect to="/trivial" />
            </Route>
            <Route path="/*">
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </Router>

    </div>

  );
}

export default App;
