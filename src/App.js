import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



import { HomePage } from "./pages/Home/HomePage";
import { HeaderPartial } from "./Partials/HeaderPartial/HeaderPartial";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/"> <HomePage/> </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          
        </ul>
      </div>
    </Router>
  );
}

export default App;
