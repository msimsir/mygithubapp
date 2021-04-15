import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bookmark from "./pages/Bookmark/Bookmark";
import Home from "./pages/Home/Home";
import RepoDetails from "./pages/RepoDetails/RepoDetails";
import SearchResults from "./pages/SearchResults/SearchResults";
import UserDetails from "./pages/UserDetails/UserDetails";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={SearchResults} />
          <Route path="/repodetail" component={RepoDetails} />
          <Route path="/userdetail" component={UserDetails} />
          <Route path="/bookmarks" component={Bookmark} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
