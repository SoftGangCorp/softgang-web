import './App.css';
import HomePage from "./pages/home"
import TeamPage from "./pages/team"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <img src="sg.png" alt="logo?" className="rounded mx-auto d-block App-logo" />
      <Router>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/team">Team</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/team">
              <TeamPage />
            </Route>
          </Switch>
        </div>
      </Router>



    </div>
  );
}

export default App;
