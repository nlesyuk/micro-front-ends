import React from "react";
import ReactDOM from "react-dom";
const Header = React.lazy(() => import('my-nav/Header'));
const Search = React.lazy(() => import('my-search/Search'));

import "./index.css";

const App = () => (
  <div className="container">
    <React.Suspense fallback={'loading...'}>
      <Header />
    </React.Suspense>
    <React.Suspense fallback={'loading...'}>
      <Search />
    </React.Suspense>
    <div>Name: host</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
