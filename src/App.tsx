import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RepoDetails from "./pages/RepoDetails/RepoDetails";
import SearchResults from "./pages/SearchResults/SearchResults";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={SearchResults} />
          <Route path="/repodetail" component={RepoDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
