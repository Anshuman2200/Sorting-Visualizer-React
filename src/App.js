import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import Select from "./components/select";
import Sorting from "./components/sorting/sorting";
import history from "./components/history";

class App extends Component {
  state = { hidden: false };
 

  disableLinks = () => {
    if (this.state.hidden === false) {
      this.setState({ hidden: true });
    } else {
      this.setState({ hidden: false });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Select />
          <Route render={() => <Redirect to="/" />} />
          <Route
            path="/"
            render={(routeProps) => (
              <Sorting {...routeProps} disableLinks={this.disableLinks} />
            )}
          />
          

          
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
