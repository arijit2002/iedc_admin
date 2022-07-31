import './App.css';
import Login from "./components/LoginComponent/Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Dashboard } from './components/DashboardComponent/Dashboard';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
