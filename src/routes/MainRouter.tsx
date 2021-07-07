import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BoasVindasPage from "../pages/BoasVindasPage";
import InstrucoesPage from "pages/InstrucoesPage";
import GamePage from "pages/GamePage";
import NotFoundPage from "../pages/NotFoundPage";

const MainRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <BoasVindasPage />
        </Route>
        <Route path="/instrucoes">
          <InstrucoesPage />
        </Route>
        <Route path="/game">
          <GamePage />
        </Route>

        <Route path="/*">
          <Redirect to="/" />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
