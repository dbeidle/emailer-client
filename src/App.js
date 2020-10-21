import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import * as actions from "./actions";
import ButtonAppBar from "./components/Header";
import Dashboard from "./components/dashboard";
import Landing from "./components/landing";
import Container from "@material-ui/core/Container";
import Credits from "./components/credits";
import Surveys from "./components/surveys";

const App = (props) => {
  const { fetchUser } = props;
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <ButtonAppBar />
        <Route path="/" exact component={Landing} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/survey/new" exact component={Surveys} />
        <Route path="/purchase/credits" exact component={Credits} />
      </BrowserRouter>
    </Container>
  );
};

export default connect(null, actions)(App);
