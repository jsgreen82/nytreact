
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import App from "../components/App";

const routes = (
  <BrowserRouter>
    <Route path="/" component={App}>
    </Route>
  </BrowserRouter>
);

export default routes;