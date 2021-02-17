import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";

function RouterHandler({ pages }) {
  return (
    <Router>
      <Switch>
        {pages.map((page) => (
          <Route
            key={() => Math.random()}
            path={page.path}
            component={page.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

RouterHandler.propTypes = {
  pages: PropTypes.arrayOf.isRequired,
};

export default RouterHandler;
