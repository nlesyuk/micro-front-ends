import React from "react";
import ReactDOM from "react-dom";
const Header = React.lazy(() => import('my-nav/Header'));

import "./index.css";

const App = () => (
  <div className="container">
    <React.Suspense fallback={'loading...'}>
      <Header />
    </React.Suspense>
    <div>Name: host</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
